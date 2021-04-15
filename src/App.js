import React from 'react';

import Navbar from './component/navbar';
import FooterSection from './component/footerSection';
import Home from './component/pages/home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Services from './component/pages/Services';
import Shop from './component/pages/Shop';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App(){
    return (

            <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component ={Home}/>
                <Route exact path="/contact" component ={Contact}/>
                <Route exact path="/about" component ={About}/>
                <Route exact path="/services" component ={Services}/>
                <Route exact path="/shop" component ={Shop}/>
            </Switch>
            <FooterSection/>
            </Router>

    )
}
export default App
