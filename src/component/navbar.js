import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {BASIC,FreeHTML,Home,Shop,Services,About,Contact} from '../assets/helper/helper';
import {MenuItems} from "../assets/helper/MenuItems";


export default class Navbar extends Component {
    state = {clicked: false}
    render() {
       const handleClick = ()=>{
            this.setState({clicked: !this.state.clicked})
        }
        return (
            <>
              <div className="navContant">
              <nav className="NavbarItems">
                   <h1 className="navbar-logo">BASSIC 88</h1>
                   <div className="menu-icone" onClick={handleClick}><span className={this.state.clicked ? '=' : 'X'}>=</span></div>
                   <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                       {
                           MenuItems.map((item,index)=>{
                           return (<li key={index}><Link  to={item.url} className={item.cName}>{item.title}</Link></li>)
                           })

                       }
                       
                   </ul>
               </nav>
              </div>
            </>
        )
    }
}