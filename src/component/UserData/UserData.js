
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class UserData extends Component {
    constructor (props){
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount = () =>{
        this.loadUser();
    }
    loadUser = async () =>{
        const result = await axios.get("http://localhost:3003/users");
        if(result){
           this.setState({users:result.data});
        }else{
           return console.log("Error!! No data found....")
        }
    }
    deleteUser = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        this.loadUser();
    }
    render() {
        return (
            <div className="userTablecontant">
                <h2>USER TABLE {this.state.users.id}<span><button className="ReadmoreButton"><Link  to="/home/adduser">Add More +</Link></button></span></h2>
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
                                <button className="ReadmoreButton"><Link  to={`/home/viewuser/${user.id}`}>view</Link></button></td>
                            <td style={{textAlign:'center', padding:'0'}}>
                                <button className="ReadmoreButton"><Link  to={`/home/edituser/${user.id}`}>Edit</Link></button></td>
                            <td style={{textAlign:'center', padding:'0'}}>
                                <button className="ReadmoreButton" onClick={()=>this.deleteUser(user.id)}>Delete</button></td>
                           </tr>
                            )
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}
