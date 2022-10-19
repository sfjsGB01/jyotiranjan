import Search from "./Search"
import Display from "./Display"

import React from "react"
// style="color: red;font-size: 2rem;border-width: 5px;border-style: double;border-color: darkgoldenrod;"

function App(){
    const [value,setValue] = React.useState(100)
    const getValue = () => {
        setValue(Math.random());
    };
    return (
        <div>
            <input type="button" value="Get number"  onClick={getValue} />
            
          <div style={{color:'red',fontSize: '2rem',borderWidth: 5,borderStyle: 'double',borderColor: 'darkgoldenrod'}}>
           Out Put : {value}
          </div>
        </div>
      )
}

export default App