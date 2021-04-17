import React, { Component } from 'react'
import CardImage from '../assets/images/290x180.gif'
import {Nullamlacusduii,Rdmrbtn} from '../assets/helper/helper';

export default class card extends Component {
    render() {
        return (
            <div>
                <div className="Cardcontant">
                <img className='Bodyimages' src={CardImage} width="100%" alt="CardImage"/>
                <div>
                <p>{this.props.title}</p>
                <p>{Nullamlacusduii()}</p>
                <div style={{textAlign:'end'}}><button className="ReadmoreButton">{Rdmrbtn()}</button></div>
                </div>
                </div>
            </div>
        )
    }
}