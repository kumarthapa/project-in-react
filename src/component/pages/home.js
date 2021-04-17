import React, { Component } from 'react'
import Banner from '../banner';
import BodySection from '../BodySection';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <BodySection/>
            </div>
        )
    }
}