import React, { Component } from 'react'
import shoppingCart from '../assets/images/shoppingCart.png'
export default class Header extends Component {
    render() {
        console.log(this.props.cardData);
        return (
            <div style={{textAlign:'center', padding:'30px', width:'500px', height:'150px', margin:'auto'}}>
                <img src={shoppingCart} style={{width:'100px', textAlign:'center',position:'absolute'}}/>
                <button className="ReadmoreButton" style={{position:'absolute', marginLeft:'38px'}}>{this.props.cardData.length}</button>
            </div>
        )
    }
}
