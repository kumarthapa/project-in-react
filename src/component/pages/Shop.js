import React, { Component } from 'react'
export default class Shop extends Component {
  render() {
    
    return (
            <>
            <div style={{width:'700px', margin:'0 auto', padding:'60px', color:'white'}}>
              <form style={{width:'100%',padding:'70px 70px', backgroundColor:"#000000d4"}}>
                <label>Name:
                </label>
                <input type="text"  name="name" placeholder='name'/>

                <label>Email:</label>
                <input type="text"  name="email" placeholder='name'/>

                <label>Phone: </label>
                <input type="text"  name="phone" placeholder='name'/>

                <input type="submit" value='SEND'/>
              </form>
            </div>
            </>      
            
          
    );
  }
}
