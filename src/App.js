import React, { Component } from 'react'
import Navbar from './component/navbar';
import Home from './component/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Services from './component/pages/Services';
import Shop from './component/pages/Shop';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
export default class App extends Component {
    render() {
        return (
            <div>
            <Router>
            <Navbar/>
            <Switch>
            <Route exact path="/project-in-react" component={Home}/>
                <Route exact path="/contact" component ={Contact}/>
                <Route exact path="/about" component ={About}/>
                <Route exact path="/services" component ={Services}/>
                <Route exact path="/shop" component ={Shop}/>
            </Switch>
            </Router>
            </div>
        )
    }
}
