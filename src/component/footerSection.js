import React, { Component } from 'react'
import Footer from './footer';


export default class FooterSection extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black'}}>
            <div style={{maxWidth:'960px',marginLeft:'auto',marginRight:'auto', display:'flex'}}>
            <div style={{width:'100%', padding:'5px'}}>
            <Footer/>
            </div>
            <div style={{width:'100%', padding:'5px'}}>
            <Footer/>
            </div>
            <div style={{width:'100%', padding:'5px'}}>
            <Footer/>
            </div>
            <div style={{width:'100%', padding:'5px'}}>
            <Footer/>
            </div>
            <div style={{width:'100%', padding:'5px'}}>
            <Footer/>
            </div>
            </div>
        </div>
        )
    }
}