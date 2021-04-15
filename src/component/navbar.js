import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    
    return(
        <>
                <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                <Link style={{marginLeft:'7%',color: 'whitesmoke'}} className="navbar-brand" to="/"><h1>Basic 88</h1><p style={{fontSize:'13px'}}>Free HTML Website template</p></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto float-md-right P1navmenu" style={{marginLeft:'47%'}}>
                    <li className="nav-item ">
                    <Link className="nav-link" exact to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" exact to="/Shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" exact to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" exact to="/about">About us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" exact to="/contact">Contact us</Link>
                    </li>
                </ul>
                </div>
                </div>
                </nav>
            </>
    )
}

export default Navbar;