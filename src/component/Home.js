import React, { useState, useEffect } from 'react'

const Home = () => {
    const [count, setCount] = useState(1)
    const [slider, setSlider] = useState('FIRST SLIDER')

    const onClicksilder = () => {
        setCount((data) => {
            return data = count + 1
        })
        if (count == 1) {
            setSlider('FIRST SLIDER')
        } else if (count == 2) {
            setSlider('SECOND SLIDER')
        } else if (count == 3) {
            setSlider('THIRD SLIDER')
        }
        if (count == 3) {
            setCount(3)
        }
    }
    const onClickprivsilder = () => {
        setCount((data) => {
            return data = count - 1
        })
        if (count == 1) {
            setSlider('FIRST SLIDER')
        } else if (count == 2) {
            setSlider('SECOND SLIDER')
        } else if (count == 3) {
            setSlider('THIRD SLIDER')
        }
        if (count == 1) {
            setCount(1)
        }
    }


    return (
        <>
            <div style={{
                display: 'block', color: '#fff', textAlign: 'center',
                backgroundColor: 'black', width: '100%'
            }}>
                <div style={{
                    color: '#fff', textAlign: 'center', padding: '180px',
                    backgroundColor: 'black', width: '100%'
                }}>
                    <h1>{slider}</h1>
                    <h3 style={{ padding: '10px' }}>This is your title</h3>
                    <p style={{ textAlign: 'center', width: '500px', margin: '20px auto' }}>Contrary to popular belief, Lorem Ipsum is
                    not simply random text. It has roots
                    in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
                    <button style={{ margin: '5px', padding: '2px 5px', backgroundColor: 'yellow', border: 'none' }}></button>
                    <button style={{ margin: '5px', padding: '2px 5px', backgroundColor: '#fff', border: 'none' }}></button>
                    <button style={{ margin: '5px', padding: '2px 5px', backgroundColor: '#fff', border: 'none' }}></button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '30px auto' }}>

                    <button onClick={onClickprivsilder} style={{
                        padding: '10px 10px', margin: '10px 5px',
                        border: '1px solid white', borderRadius: '4px', color: '#fff', width: '100px', backgroundColor: 'black'
                    }}>PRIV</button>
                    <button onClick={onClicksilder} style={{
                        padding: '10px 10px', margin: '10px 5px', border: 'none',
                        borderRadius: '4px', color: 'black', width: '100px'
                    }}>NEXT</button>
                </div>
            </div>

        </>
    )
}

export default Home
