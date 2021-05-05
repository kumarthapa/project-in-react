import React, { Component } from "react";
import Turmeric from "../assets/images/Turmeric.jpg";
// my parant is src/containers/HomeContainer.js
export default class Myhome extends Component {
  render() {
    //console.log("Myhome==", this.props);
    return (
      <div style={{width:'50%', margin:'auto'}}>
        <br/>
        <div
          style={{
            display: "flex",
            padding: "20px",
            border: "1px solid #ccc",
            justifyContent: "flex-start",
            width: "660px",
            margin:'auto'
          }}
        >
          <div>
            <img src={Turmeric} width="100px" alt="Turmeric" />
          </div>
          <div>
            <h2>I - phone 11</h2>
          </div>
          <div>
            <p>Price: $1000.00</p>
          </div>
          <div>
            <button className="ReadmoreButton"
              onClick={() =>
                this.props.addToCartHandler({ price: 1000, name: "i-phone11" })
              }
            >
              Add to Cart
            </button>
          </div>
          <div>
            <button className="ReadmoreButton"
              onClick={() =>
                this.props.removeToCartHandler()
              }
            >
              Remove to Cart
            </button>
          </div>
        </div>
        <br/> <br/>
      </div>
    );
  }
}
