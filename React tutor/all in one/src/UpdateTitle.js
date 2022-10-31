import React from "react"

function UpdateTitle() {
    const [counter, setCounter] = React.useState(null)

    React.useEffect(()=>{
        setCounter(0)
    },[])

    React.useEffect(()=>{
        document.title = `Counter : ${counter}`
    },[counter])

    const incrementHandler = () =>{
        console.log(counter)
        setCounter((prev)=>{
            return prev+1;
        })
    }
    return (
        <div>
            <input type='button' value='Increment' onClick={incrementHandler} />
        </div>
    )

}

export default UpdateTitle