import React, { Component } from 'react'
import {Aboutus,WhoWeAre} from '../../assets/helper/helper';
export default class About extends Component {
    render() {
        return (
            <div className="HTcontainer">
                <h1>{Aboutus()}</h1><br/>
                <hr/><br/>
                <p>{WhoWeAre()}</p>
            </div>
        )
    }
}