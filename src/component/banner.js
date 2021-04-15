import React from 'react'
import bannerImage from '../assets/images/960x360.gif'
function Banner (){

    return (
            <div style={{textAlign:'center'}}>
                <img src={bannerImage} className="img-fluid" alt="bannerImage"/>
            </div>

    )
}
export default Banner