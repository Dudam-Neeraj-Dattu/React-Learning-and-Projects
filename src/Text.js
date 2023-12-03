import { useState, useEffect } from 'react'

export const Text = () => {

    const [text, setText] = useState('');

    const updateText = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        console.log("Mounted");

        return (() => {
            console.log("Unmounted")
        })
    }, [])

    return (
        <div>
            <input type="text" name="" id="" onChange={updateText} />
            <h3>{text}</h3>
        </div>
    )
}
