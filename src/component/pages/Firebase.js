import React, { useState, useEffect } from 'react'
import firebase from "../../firebase"
import { v4 as uuidv4 } from "uuid"

function Firebase() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [test, setTest] = useState([])
    const [loading, setLoading] = useState(false)

    const ref = firebase.firestore().collection('test');

    useEffect(() => {
        getTest();
    }, [])

    function getTest() {
        setLoading(true)
        ref.onSnapshot((query) => {
            const items = []
            query.forEach((test) => {
                items.push(test.data())
            })
            console.log(items);
            setTest(items);
            setLoading(false);
        })
    }

    function addTest(data) {
        console.log(data);

        if (data.title && data.description) {
            ref
                .doc(data.id)
                .set(data)
                .catch((err) => {
                    console.error(err);
                })

        }
    }


    if (loading) {
        return (
            <h1>
                loading...
            </h1>
        )
    }

    const inStyle = {
        padding: "15px"
    }

    return (
        <div>
            <div>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    style={inStyle}
                />

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    style={inStyle}
                />

                <button style={inStyle} type="button" onClick={() => addTest({ title, description, id: uuidv4() })}>Add</button>

            </div>

            {test.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}


export default Firebase