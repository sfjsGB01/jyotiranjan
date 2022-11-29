import React from 'react'

function AddStore(props) {
  const [formState, setFormState] = React.useState({ id: "500", name: "", owner: "" })

console.log(props)
  const cancleStore = () => {
    props.setShowAddForm(false)
  }

  const textChanged = (e) => {
    setFormState((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }
    })
  }

  return (
    <div>
      <br />
      <br />
      <form>
        <input type="text" id="name" placeholder="Store Name" onChange={textChanged} />
        <br />
        <br />
        <input type="text" id="owner" placeholder="Store owner" onChange={textChanged} />
        <br />
        <br />
        <input type="button" value="Save" onClick={()=>{props.saveNewStore(formState)}} />
        <input type="button" value="Cancle" onClick={cancleStore} />
      </form>
      <br />
      <br />
    </div>
  )
}

export default AddStore