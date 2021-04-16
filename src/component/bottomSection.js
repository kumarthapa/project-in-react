import React from 'react'
import BottomImage from '../assets/images/450x250.gif'
function BottomSection (){

    return (
        <div className="bottomsection">
            <div style={{flex:'1.5', padding:'10px'}}>
            <p> Nullamlacus facilis leo nibh</p>
            <p>Nullamlacus duii ipsum conseque loborttis non
            euisque morbi penas dapibulam orna psum conseque loborttis non
            euisque morbi penas dapibulam orna psum conseque loborttis non
            euisque morbi penas dapibulam orna</p>
            <div style={{textAlign:'end'}}><button className="ReadmoreButton">Read more</button></div>
            </div>
            <div tyle={{flex:'1.5'}}>
            <img style={{width:'100%'}} className="Bodyimages" src={BottomImage} alt="BottomImage"/>
            </div>
        </div>
    )
}
export default BottomSection;