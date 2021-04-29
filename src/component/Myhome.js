import React, { Component } from 'react'
import Turmeric from '../assets/images/Turmeric.jpg'
// my parant is src/containers/HomeContainer.js
export default class Myhome extends Component {
    
    render() {
        console.log('Myhome==', this.props.cardData)
        return (
            <div>
                
                <h1>Myhome component  <span style={{padding:'10px', width:'40px', height:'40px', borderRadius:'100px', backgroundColor:'red'}}>{this.props.cardData.length}</span></h1>
                <div style={{display:'flex', padding:'20px',border:'1px solid #ccc',justifyContent:'flex-start',width:'500px'}}>
                    <div><img src={Turmeric} width="100px" alt="Turmeric"/></div>
                    <div><h2>I - phone 11</h2></div>
                    <div><p>Price: $1000.00</p></div>
                    <div>
                        <button onClick={()=>this.props.addToCartHandler({price: 1000,name:'i-phone11'})}>Add to Cart</button></div>
                </div>
            </div>
        )
    }
}
