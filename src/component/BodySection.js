import React from 'react'
import Card from './card'
import BottomSection from './bottomSection'

function BodySection (){

    return (
        <div style={{maxWidth:'960px',marginLeft:'auto',marginRight:'auto'}}>
            <div class="row">
            <div class="col-sm py-5">
            <Card title="Indonectetus facilis"/>
            </div>
            <div class="col-sm py-5">
            <Card title="Indonectetus wipiya"/>
            </div>
            <div class="col-sm py-5">
            <Card title="Indonectetus kestore"/>
            </div>
        </div>
        <BottomSection/>
        </div>
        
    )
}
export default BodySection