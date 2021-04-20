import React, { Component } from 'react'
import Turmeric from '../../assets/images/Turmeric.jpg'
import {products} from '../../assets/helper/helper';
export default class Shop extends Component {
    render() {
        return (
            <div className="HTcontainer">
                <table>
                <tr>
                    <th colSpan='2'><br/><h2>{products()}</h2><br/><hr/><br/></th>
                </tr>
                <tr>
                    <td><img src={Turmeric}  alt="Turmeric" width="60%"/></td>
                    <td><img src={Turmeric}  alt="Turmeric" width="60%"/></td>
                </tr>
                </table>
            </div>
        )
    }
}