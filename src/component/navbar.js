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
        // const myFunction=()=> {
        //     console.log('helo world');
        //     var x = document.getElementById("myTopnav");
        //     if (x.className === "topnav") {
        //       x.className += " responsive";
        //     } else {
        //       x.className = "topnav";
        //     }
        //   }
        return (
            <>
              <div className="navContant">
              <nav className="NavbarItems">
                   <h1 className="navbar-logo">BASSIC 88</h1>
                   <div className="menu-icone" onClick={handleClick}><span className={this.state.clicked ? '=' : 'X'}>=</span></div>
                   <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                       {
                           MenuItems.map((item,index)=>{
                           return (<li key={index}><Link exact to={item.url} className={item.cName}>{item.title}</Link></li>)
                           })

                       }
                       
                   </ul>
               </nav>
              </div>
            </>
        )
    }
}





                {/* <nav style={{backgroundColor:'black'}}>
                <div className="topnav headerContainer" id="myTopnav" >
                <Link className="active"  to="/project-in-react">
                <h1>{BASIC()}<br/><span style={{fontSize:'13px', lineHeight:'0px'}}>{FreeHTML()}</span></h1>
                </Link>
                
                <Link exact to="/shop">{Shop()}</Link>
                <Link exact to="/services">{Services()}</Link>
                <Link exact to="/about">{About()}</Link>
                <Link exact to="/contact">{Contact()}</Link>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars">=</i>
                </a>
                </div>

                <div style={{paddingLeft:'16px'}}>
                <h2>Responsive Topnav Example</h2>
                <p>Resize the browser window to see how it works.</p>
                </div>
                </nav> */}






{/* <nav style={{backgroundColor:'black',display:'flex'}}>
                <div className="headerContainer">
                <Link className="headerlogo"  to="/project-in-react">
                <h1>{BASIC()}<br/><span style={{fontSize:'13px', lineHeight:'0px'}}>{FreeHTML()}</span></h1>
                </Link>
            
                <div>
                <ul className="HeaderMenu P1navmenu">
                    <li><Link exact to="/project-in-react">{Home()}</Link></li>
                    
                    <li><Link exact to="/Shop">{Shop()}</Link></li>
                    
                    <li><Link exact to="/services">{Services()}</Link></li>
                    
                    <li><Link exact to="/about">{About()}</Link></li>

                    <li><Link exact to="/contact">{Contact()}</Link></li>

                </ul>

                </div>
                </div>
                </nav> */}