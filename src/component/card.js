import React from 'react'
import CardImage from '../assets/images/290x180.gif'
function Card (props){

    return (
        <div>
                <div className="card" style={{width:'100%'}}>
                <img src={CardImage} className="card-img-top" alt="CardImage"/>
                <div className="card-body">
                <p className="card-title">{props.title}</p>
                <p className="card-text">Nullamlacus duii ipsum conseque loborttis non
                euisque morbi penas </p>
                <div style={{textAlign:'end'}}><p className="btn btn-warning">Read more</p></div>
                </div>
                </div>
        </div>
    )
}
export default Card