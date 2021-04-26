import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Adduser extends Component {
    state = {
        name:'',
        email:'',
        phone:''
    }
   
    OnchangeDatainpute = (e) =>{
      this.setState({[e.target.name]: e.target.value});
    }
    
        
        onSubmitform = (e) =>{
            e.preventDefault();
            // const {name,email,phone} = this.state;

            // if((name == !'')&&(email == !'')&&(phone == !'')){
            // }
            // else{
            //     alert('Please fill all the fields!');
            // }
            console.log(this.state);
            axios.post("http://localhost:3003/users", this.state)
            .then(response =>{
                console.log(response); 
            })
            .catch(error =>{
                console.log("Api---" + error);
            })
                alert('Add successfully');
            }
    
    render() {
        return (
            <div>
              <div className="HTcontainer">
                <h2>Add user</h2>
                <br/>
                <p>You can add user</p>
                <br/>
                <form onSubmit={this.onSubmitform}>
                <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">Name</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="fname" onChange={this.OnchangeDatainpute} name="name" value={this.state.name} placeholder="Your name.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="email" onChange={this.OnchangeDatainpute}  name="email" value={this.state.email} placeholder="Your email.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">Phone</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="phone" onChange={this.OnchangeDatainpute}  name="phone" value={this.state.phone} placeholder="Your phone.."/>
                    </div>
                    </div>
                    <div className="row">
                    <br/>
                    <input type="submit" value="Submit"/>
                    </div>
                    </form> 
                    <button className="ReadmoreButton"><Link  to="/project-in-react">Back to home</Link></button>
                     <br/><br/><br/>
                    </div>  
            </div>
        )
    }
}
