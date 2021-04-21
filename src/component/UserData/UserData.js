
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class UserData extends Component {
    state = {
        users: []
    }

    componentDidMount = async () =>{
       const result = await axios.get("https://jsonplaceholder.typicode.com/users");
       console.log(result.length);
       if(result){
           this.setState({users:result.data});
       }else{
            //    return <h1>Error!! No data found....</h1>;
            console.log("Error!! No data found....")
       }
       
    }
    render() {
        return (
            <div className="userTablecontant">
                <h2>USER TABLE<span><button className="ReadmoreButton"><Link  to="/home/adduser">Add More +</Link></button></span></h2>
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th colSpan="4">phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.users.map((user,index)=>{
                            return (
                            <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td style={{textAlign:'center', padding:'0'}}>
                                <button className="ReadmoreButton"><Link  to="#">view</Link></button></td>
                            <td style={{textAlign:'center', padding:'0'}}>
                                <button className="ReadmoreButton"><Link  to="/home/edituser">Edit</Link></button></td>
                            <td style={{textAlign:'center', padding:'0'}}>
                                <button className="ReadmoreButton">Delete</button></td>
                           </tr>
                            )
                            })}
                            
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
