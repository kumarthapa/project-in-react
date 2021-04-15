import React from 'react'
import BottomImage from '../assets/images/450x250.gif'
function BottomSection (){

    return (
        <div class="row">
            <div class="col-sm py-2">
            <p className="card-title"> Nullamlacus facilis leo nibh</p>
            <p className="card-text">Nullamlacus duii ipsum conseque loborttis non
            euisque morbi penas dapibulam orna psum conseque loborttis non
            euisque morbi penas dapibulam orna psum conseque loborttis non
            euisque morbi penas dapibulam orna</p>
            <div style={{textAlign:'end'}}><p className="btn btn-warning">Read more</p></div>
            </div>
            <div class="col-sm py-2" style={{textAlign:'center'}}>
            <img src={BottomImage} alt="BottomImage"/>
            </div>
        </div>
    )
}
export default BottomSection;