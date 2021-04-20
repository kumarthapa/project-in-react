import React, { Component } from 'react'
import {Nullamlacus,Nullamlacustext,Rdmrbtn} from '../assets/helper/helper';
import BottomImage from '../assets/images/450x250.gif'


export default class bottomSection extends Component {
    render() {
        return (
           <div className="bottomsection">
            <div className="bottomText">
            <p>{Nullamlacus()}</p>
            <p>{Nullamlacustext()}</p>
            <div style={{textAlign:'end'}}><button className="ReadmoreButton">{Rdmrbtn()}</button></div>
            </div>
            <div className="bottomimagecontant">
            <img width="100%" className="Bottomimages" src={BottomImage} alt="BottomImage"/>
            </div>
        </div>
        )
    }
}