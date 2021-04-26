import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Edituser extends Component {
  constructor(props){
    super(props);
    this.state = {
          users:''
    }
  } 
  OnchangeDatainpute = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }
    onSubmitform = async e =>{
        e.preventDefault();
        const id = this.props.match.params.id
        await axios.put(`http://localhost:3003/users/${id}`, this.state.users)
        alert('Add successfully');
        console.log(this.state.users)
    }
     componentDidMount = async () =>{
       const id = this.props.match.params.id
       const result = await axios.get(`http://localhost:3003/users/${id}`)
       .then((result) =>{
        this.setState({users:result.data});
        // console.log(this.state.users);
        // alert('Add successfully');
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
    render() {
        
        return (
            <div>
              <div className="HTcontainer">
                <h2>Edit user</h2>
                <br/>
                <p>You can Edit user</p>
                <br/>
                <form onSubmit={this.onSubmitform}>
                <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">Name</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="fname" onChange={this.OnchangeDatainpute} name="name" defaultValue={this.state.users.name} placeholder="Your name..."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="email" onChange={this.OnchangeDatainpute}  name="email" defaultValue={this.state.users.email} placeholder="Your email..."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">Phone</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="phone" onChange={this.OnchangeDatainpute}  name="phone" defaultValue={this.state.users.phone} placeholder="Your phone..."/>
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
