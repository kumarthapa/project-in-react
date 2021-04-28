import React, { Component } from 'react'
import * as qz from "qz-tray";

export class Qztray extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    click = () => {
        console.log('sjfjsd');

        // qz.websocket.connect().then(() => {
        //     return qz.printers.find();
        // }).then((printers) => {
        //     console.log(printers);
        //     let config = qz.configs.create('PDF');
        //     return qz.print(config, [{
        //         type: 'pixel',
        //         format: 'html',
        //         flavor: 'plain',
        //         data: '<h1>Hello JavaScript!</h1>'
        //     }]);
        // }).then(() => {
        //     return qz.websocket.disconnect();
        // }).then(() => {
        //     // process.exit(0);
        //     qz.websocket.disconnect();
        // }).catch((err) => {
        //     console.error(err);
        //     // process.exit(1);
        //     qz.websocket.disconnect();
        // });

        qz.websocket.connect().then(() => {
            return qz.usb.claimDevice(this.scale.vendor, this.scale.product, this.scale.device);
        }).catch(this.err).then(() => {
            return qz.usb.readData(this.scale.vendor, this.scale.product, this.scale.endpoint, '8');
        }).then((data) => {
            // Get status
            var status = parseInt(data[1], 16);
            switch (status) {
                case 1:	// fault
                case 5:	// underweight
                case 6:	// overweight
                case 7:	// calibrate
                case 8:	// re-zero
                    status = 'error'; break;
                case 3:
                    status = 'busy'; break;
                case 2:	// stable at zero
                case 4: // stable non-zero
                default:
                    status = 'stable';
            }

            // Get precision
            var precision = parseInt(data[3], 16);
            precision = precision ^ -256; // unsigned to signed

            // Get weight
            data.splice(0, 4);
            data.reverse();
            var weight = parseInt(data.join(''), 16);

            // Apply precision
            weight *= Math.pow(10, precision);
            weight = weight.toFixed(Math.abs(precision));

            // Get units
            var units = parseInt(data[2], 16);
            switch (units) {
                case 3:
                    units = 'kg'; break;
                case 11: // ounces
                    units = 'oz'; break;
                case 12:
                default:
                    units = 'lbs';
            }

            alert(status + ": " + weight + units);
        }).then(this.release)
            .catch(this.release);
    }



    mt = {
        vendor: '0x0EB8',
        product: '0xF000',
        device: '0x00',
        endpoint: '0x81',
    };

    dymo = {
        vendor: '0x0922',
        product: '0x8009',
        device: '0x00',
        endpoint: '0x82',
    };

    // FIXME: Verify with physical scale
    stamps = {
        vendor: '0x1446', // or '0x6A73'
        product: '0xF000',
        device: '0x00',
        endpoint: '0x81',
    };

    scale = this.mt;

    err = (e) => { console.error(e); }

    release = () => {
        qz.usb.releaseDevice(this.scale.vendor, this.scale.product).catch((e) => {
            console.error(e);
        });
    }


    render() {
        return (
            <div>
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}

export default Qztray
