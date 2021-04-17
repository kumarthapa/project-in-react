import React, { Component } from 'react'
import bannerImage from '../assets/images/960x360.gif'


export default class Banner extends Component {
    render() {
        return (
            <div>
                <div style={{maxWidth:'960px',marginLeft:'auto',marginRight:'auto', display:'flex'}}>
                <img id="bannerImg" style={{width:'-webkit-fill-available'}} src={bannerImage} alt="bannerImage"/>
                </div>
            </div>
        )
    }
}
