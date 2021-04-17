import React, { Component } from 'react'
import Card from './card'
import BottomSection from './bottomSection'


export default class BodySection extends Component {
    render() {
        return (
            <>
            <div className="cardGrid">
                <div style={{flex:'1'}}>
                <Card title="Indonectetus facilis"/>
                </div>
                <div style={{flex:'1'}}>
                <Card title="Indonectetus wipiya"/>
                </div>
                <div style={{flex:'1'}}>
                <Card title="Indonectetus kestore"/>
                </div>
            </div>
            <BottomSection/>
            </>
        )
    }
}
