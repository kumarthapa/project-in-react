import React from 'react';

import Navbar from './component/navbar';
import Banner from './component/banner';
import BodySection from './component/BodySection';
import FooterSection from './component/footerSection';

function App(){
    return (
        <div>
            <Navbar/>
            <Banner/>
            <BodySection/>
            <FooterSection/>
        </div>
    )
}
export default App
