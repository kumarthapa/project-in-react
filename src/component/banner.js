import React, { Component } from 'react'
import bannerImage from '../assets/images/960x360.gif'


export default class Banner extends Component {
    render() {
        return (
                <div className="banner">
                <img id="bannerImg" width="100%" src={bannerImage} alt="bannerImage"/>
                </div>
        )
    }
}
