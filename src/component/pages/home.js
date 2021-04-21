import React, { Component } from 'react'
import Banner from '../banner';
import BodySection from '../BodySection';
import UserData from '../UserData/UserData'



export default class Home extends Component {
    render() {
        return (
            <div className="main-conatiner">
                <Banner/>
                <UserData/>
                <BodySection/>
            </div>
        )
    }
}