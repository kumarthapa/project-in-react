
import React, { Component } from 'react'
import {LINKBLOCK,sampledata} from '../assets/helper/helper';
export default class Footer extends Component {
  render() {
    return (
      // <div className="footerLink">
            <ul>
            <li style={{border:'none'}}>{LINKBLOCK()}</li>
            <li>
            <a href="#">{sampledata()}</a>
            </li>
            <li>
            <a href="#">{sampledata()}</a>
            </li>
            <li>
            <a href="#">{sampledata()}</a>
            </li>
            <li>
            <a href="#">l{sampledata()}</a>
            </li>
            <li>
            <a href="#">{sampledata()}</a>
            </li>
            </ul>
          // </div> 
    )
  }
}
