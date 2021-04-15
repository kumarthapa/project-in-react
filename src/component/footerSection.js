import React from 'react';
import Footer from './footer';

function FooterSection (){
    return (

        <div className="container-fluid bg-dark mt-4">
            <div class="row " style={{maxWidth:'60%',marginLeft:'auto',marginRight:'auto'}}>
            <div class="col-sm py-5">
            <Footer/>
            </div>
            <div class="col-sm py-5">
            <Footer/>
            </div>
            <div class="col-sm py-5">
            <Footer/>
            </div>
            <div class="col-sm py-5">
            <Footer/>
            </div>
            <div class="col-sm py-5">
            <Footer/>
            </div>
            </div>
        </div>
   

    )
}
export default FooterSection;