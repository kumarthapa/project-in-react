import React, { Component } from 'react'
import Banner from '../banner';
import BodySection from '../BodySection';
import UserList from './userList'



export default class Home extends Component {
    render() {
        return (
            <div className="main-conatiner">
                <Banner/>
                <UserList/>
                <BodySection/>
            </div>
        )
    }
}