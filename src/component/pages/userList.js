// import React, { Component } from 'react';
// import axios from 'axios';

// export default class UserList extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             users:[],
//             isLoading: false,
//             isError: false
//         }
//     }

//     async componentDidMount (){
//         this.setState({isLoading:true})
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if(response.ok){
//             const users = await response.json();
//             console.log(users);
//             this.setState({users,isLoading:false})
//         }
//     }
//     renderTableHeader = () =>{
//         return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
//     }

//     renderTableRows = () =>{
//         return this.state.users.map(user =>{
//             return (
//                 <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.name}</td>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                     <td>{`${user.address.street},${user.address.city}`}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.website}</td>
//                     <td>{user.company.name}</td>

//                 </tr>
//             )
//         })
//     }
//     render() {
//         const {users, isLoading, isError} = this.state;
//         if(isLoading){
//             return <div>loading.....</div>;
//         }
//         if(isError){
//             return <div>Error...</div>;
//         }

//          return users.length > 0 ? (
//          <div className="userTable">
//            <table style={{width:'100%', padding:'10px',textAlign:'left'}}>
//             <thead>
//                 <tr>
//                     {this.renderTableHeader()}
//                 </tr>
//             </thead>
//             <tbody>
//                     {this.renderTableRows()}
//             </tbody>
//         </table>
//          </div>
            
//          ):( 
//               <div>no users</div>
//          )
//     }
// }
