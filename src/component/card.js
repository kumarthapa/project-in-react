import React from 'react'
import CardImage from '../assets/images/290x180.gif'
function Card (props){

    return (
        <div>
                <div className="Cardcontant">
                <img className='Bodyimages' src={CardImage} width="100%" alt="CardImage"/>
                <div>
                <p>{props.title}</p>
                <p>Nullamlacus duii ipsum conseque loborttis non
                euisque morbi penas </p>
                <div style={{textAlign:'end'}}><button className="ReadmoreButton">Read more</button></div>
                </div>
                </div>
        </div>
    )
}
export default Card