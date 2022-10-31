import { useState } from "react"
function ControlForm() {

    // Input control
    const [inputValue,setInputValue] = useState('India')
    const updateInput = (event) => {setInputValue(event.target.value)}

    // Checkbox control
    const [checkedStateOne, setCheckedStateOne] = useState(false);
    const [checkedStateTwo, setCheckedStateTwo] = useState(true);
    const updateCheckedStateOne=() =>{
        setCheckedStateOne(!checkedStateOne)
    }
    const updateCheckedStateTwo=() =>{
        setCheckedStateTwo(!checkedStateTwo)
    }


    const formSubmit = (event)=>{ 
        event.preventDefault()
        const jsonValue = {
            'Input Data':inputValue,
            '1st checkbox':checkedStateOne,
            '2nd checkbox':checkedStateTwo
        }
        console.log(jsonValue)
    }

    return (
        <form>
            <h2>Control Form</h2>

            {/* Text Box */}
            <input type='text' value={inputValue} onChange={updateInput} /><br />

            <br />

            {/* Check Box */}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={checkedStateOne} onChange={updateCheckedStateOne} />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={checkedStateTwo} onChange={updateCheckedStateTwo} />
            <label htmlFor="vehicle2"> I have a car</label><br />

            <br />

            {/* Radio buttons */}
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">CSS</label><br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label htmlFor="javascript">JavaScript</label><br />

            <br />

            {/* Dropdown */}
            <label htmlFor="cars">Choose a car:</label>

            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <br/><br/>

            {/* Textarea */}
            <label htmlFor="feedback">Feedback</label><br/>
            <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>

            <br/>

            <input type="submit" value="submit" onClick={formSubmit} />
        </form>
    )

}

export default ControlForm