import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Viewuser extends Component {
    
  constructor(props){
    super(props);
    this.state = {
        users:''
    }
    
  } 
  
     componentDidMount = async () =>{
        const id = this.props.match.params.id
       const result = await axios.get(`http://localhost:3003/users/${id}`)
       .then((result) =>{
        this.setState({users:result.data});
        console.log(this.state.users);
        })
        .catch(error =>{
            console.log("hello error===" + error);
        })
    }
    render() {
  
        return (
            <div>
              <div className="HTcontainer">
                <h2>Viewuser user</h2>
                <br/>
                <p>You can Viewuser user</p>
                <br/>
               <ul className="viewUser">
                   <li>Name: {this.state.users.name}</li>
                   <li>Email: {this.state.users.email}</li>
                   <li>Phone: {this.state.users.phone}</li>
               </ul>
               <button className="ReadmoreButton"><Link  to="/project-in-react">Back to home</Link></button>
                     <br/><br/><br/>
                    </div>  
            </div>
        )
    }
}
