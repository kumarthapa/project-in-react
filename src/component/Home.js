import React, { useState } from 'react'

import Shop from './pages/Shop'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
const Home = () => {
    const [menu, setMenu] = useState('')

    const onClikhandler = name => Event => {
        Event.preventDefault()
        setMenu(name)
    }

    return (
        <div>
            <div style={{ height: '740vh', width: '20%', padding: '10px', backgroundColor: 'darkslateblue', float: 'left', color: '#fff' }}>
                <h2 style={{ margin: '10px 10px' }}>Our products</h2>
                <ul style={{ margin: '20px auto' }}>
                    <li>
                        <p style={{ padding: '10px', cursor: 'pointer', color: menu === 'shop' ? 'gray' : null }}
                            name="shop" onClick={onClikhandler('shop')}>Shop</p>
                    </li>
                    <li>
                        <p style={{ padding: '10px', cursor: 'pointer', color: menu === 'services' ? 'gray' : null }}
                            name="services" onClick={onClikhandler('services')}>Services</p>
                    </li>
                    <li>
                        <p style={{ padding: '10px', cursor: 'pointer', color: menu === 'about' ? 'gray' : null }}
                            name="about" onClick={onClikhandler('about')}>About us</p>
                    </li>
                    <li>
                        <p style={{ padding: '10px', cursor: 'pointer', color: menu === 'contactus' ? 'gray' : null }}
                            name="contactus" onClick={onClikhandler('contactus')}>Contact us</p>
                    </li>
                </ul>
            </div>
            <div style={{ float: 'right', width: '80%', height: '700px' }}>
                {
                    menu === 'shop' ? <div><Shop /></div> : null
                }
                {
                    menu === 'services' ? <div><Services /></div> : null
                }
                {
                    menu === 'about' ? <div><About /></div> : null
                }
                {
                    menu === 'contactus' ? <div><Contact /></div> : null
                }
            </div>

        </div>
    )
}

export default Home
