import React from 'react'
import Turmeric from '../../assets/images/Turmeric.jpg'
function Shop (){

    return (
            <div className="HTcontainer">
                <table>
                <tr>
                    <th colSpan='2'><h1>Our products</h1></th>
                </tr>
                <tr>
                    <td><img src={Turmeric}  alt="Turmeric" width="60%"/></td>
                    <td><img src={Turmeric}  alt="Turmeric" width="60%"/></td>
                </tr>
                </table>
            </div>

    )
}
export default Shop