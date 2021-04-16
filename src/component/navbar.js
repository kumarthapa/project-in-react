import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(){
    
    return(
        <>
                <nav style={{backgroundColor:'black',display:'flex'}}>
                <div className="headerContainer">
                <Link className="headerlogo"  to="/project-in-react">
                <h1>BASIC 88 <br/><span style={{fontSize:'13px', lineHeight:'0px'}}>Free HTML Website template</span></h1>
                </Link>
            
                <div>
                <ul className="HeaderMenu P1navmenu">
                    <li><Link exact to="/project-in-react">Home</Link></li>
                    
                    <li><Link exact to="/Shop">Shop</Link></li>
                    
                    <li><Link exact to="/services">Services</Link></li>
                    
                    <li><Link exact to="/about">About us</Link></li>

                    <li><Link exact to="/contact">Contact us</Link></li>

                </ul>

                </div>
                </div>
                </nav>
            </>
    )
}

export default Navbar;