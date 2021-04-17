import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {BASIC,FreeHTML,Home,Shop,Services,About,Contact} from '../assets/helper/helper';


export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav style={{backgroundColor:'black',display:'flex'}}>
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
                </nav>
            </>
        )
    }
}