import React, { Component } from 'react'
import {Formheading,Nameheadingtext,Name,Email,Phone} from '../../services/helper/helper';
export default class Contact extends Component {
    render() {
        return (
            <div>
              <div className="HTcontainer">
                <h2>{Formheading()}</h2>
                <br/>
                <p>{Nameheadingtext()}</p>
                <br/>
                <form>
                <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">{Name()}</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="email">{Email()}</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="email" name="email" placeholder="Your email.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">{Phone()}</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="phone" name="phone" placeholder="Your phone.."/>
                    </div>
                    </div>
                    <div className="row">
                        <br/>
                    <input type="submit" value="Submit"/>
                    </div>
                    </form> 
                     <br/><br/><br/>
                    </div>  
            </div>
        )
    }
}