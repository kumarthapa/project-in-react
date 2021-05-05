import React, { Component } from 'react'
import Card from './card'
import BottomSection from './bottomSection'


export default class BodySection extends Component {
    render() {
        return (
            <>
            <div className="card">
                <div>
                <Card title="Indonectetus facilis"/>
                </div>
                <div>
                <Card title="Indonectetus wipiya"/>
                </div>
                <div>
                <Card title="Indonectetus kestore"/>
                </div>
            </div>
            <BottomSection/>
            </>
        )
    }
}
