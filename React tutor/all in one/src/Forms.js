import { useState,useRef } from "react"
function Forms() {
    const [cText, setCText] = useState('India')

    const refNode = useRef()

    const changeText = (event) => {
        const et = event.target.value

        setCText(et)
    }

    const formSubmit = (event) => {
        event.preventDefault()
        const values = {
            controlledText: cText,
            uncontroled:refNode.current.value
        }

        console.log('Form values: ', values)

    }

    return (
        <div>
            <form>
                <h2>Controlled form demo</h2>

                <input type='text' value={cText} onChange={changeText} />

                <hr />

                <h2>Uncontrolled form demo</h2>
                <input type='text' ref={refNode} defaultValue='test it'/>

                <hr />
                <button onClick={formSubmit}>Submit Form</button>
            </form>
        </div>
    )
}

export default Forms