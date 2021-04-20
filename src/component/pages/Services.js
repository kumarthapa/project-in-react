
import React, { Component } from 'react'
import {Servicespage,Servicespagetext} from '../../assets/helper/helper';
export default class Services extends Component {
    render() {
        return (
              <div className="HTcontainer">
                <h1>{Servicespage()}</h1><br/>
                <hr/><br/>
                <p>{Servicespagetext()}</p>
            </div>

        )
    }
}