import React from "react";
import ReactDom from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './services/reducers/index';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './assets/css/Project.css';
import App from './App'

const store=createStore(rootReducer)
//console.log('store data' , store)


ReactDom.render(
    <Provider store={store}>
     <App/>
    </Provider>,

document.getElementById("root"));