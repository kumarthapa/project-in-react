import React from 'react'

function Navbar(){
    
    return(
        <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a style={{marginLeft:'25%'}} className="navbar-brand" href="#"><h1>Basic 88</h1><p style={{fontSize:'13px'}}>Free HTML Website template</p></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto float-md-right" style={{backgroundColor:'black', marginLeft:'32%'}}>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Contact us</a>
                    </li>
                </ul>
                </div>
                </nav>
            </>
    )
}

export default Navbar;