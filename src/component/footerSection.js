import React, { Component } from 'react'
import Footer from './footer';


export default class FooterSection extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black', width:'100%'}}>
            <div className="footerCompo">
            <div className="footerLink">
            <Footer/>
            </div>
            <div className="footerLink">
            <Footer/>
            </div>
            <div className="footerLink">
            <Footer/>
            </div>
            <div className="footerLink">
            <Footer/>
            </div>
            <div className="footerLink">
            <Footer/>
            </div>
            </div>
        </div>
        )
    }
}