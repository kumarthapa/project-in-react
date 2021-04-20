import React, { Component } from 'react'
import Footer from './footer';


export default class FooterSection extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black'}}>
            <div className="footerCompo">
            <div>
            <Footer/>
            </div>
            <div>
            <Footer/>
            </div>
            <div>
            <Footer/>
            </div>
            <div>
            <Footer/>
            </div>
            <div>
            <Footer/>
            </div>
            </div>
        </div>
        )
    }
}