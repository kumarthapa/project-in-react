import React, { Component } from 'react';
import axios from 'axios'

export default class Edituser extends Component {
    state = {
        name:'',
        email:'',
        phone:''
    }
   
    OnchangeDatainpute = (e) =>{
      this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmitform = async e =>{
        e.preventDefault();
        await axios.post("https://jsonplaceholder.typicode.com/users", this.state)
        console.log(this.state);
    }
    componentDidMount = async e =>{
        // e.preventDefault();
       const  result = await axios.get("https://jsonplaceholder.typicode.com/users/")
        console.log(result);
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
                     <br/><br/><br/>
                    </div>  
            </div>
        )
    }
}
