import React, { Component } from 'react'
import {Nullamlacus,Nullamlacustext,Rdmrbtn} from '../assets/helper/helper';
import BottomImage from '../assets/images/450x250.gif'


export default class bottomSection extends Component {
    render() {
        return (
           <div className="bottomsection">
            <div style={{flex:'1.5', padding:'10px'}}>
            <p>{Nullamlacus()}</p>
            <p>{Nullamlacustext()}</p>
            <div style={{textAlign:'end'}}><button className="ReadmoreButton">{Rdmrbtn()}</button></div>
            </div>
            <div tyle={{flex:'1.5'}}>
            <img style={{width:'100%'}} className="Bodyimages" src={BottomImage} alt="BottomImage"/>
            </div>
        </div>
        )
    }
}