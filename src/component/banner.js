import React from 'react'
import bannerImage from '../assets/images/960x360.gif'
function Banner (){

    return (
            <div style={{textAlign:'center'}}>
                <img src={bannerImage} alt="bannerImage"/>
            </div>

    )
}
export default Banner