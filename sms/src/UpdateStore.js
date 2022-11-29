import React from "react"
import axios from "./util/axiosConfig"

function UpdateStore({ store, viewItem,getUser }) {

    const [updateMode, setUpdateMode] = React.useState(false)
    const [storeName,setStoreName] = React.useState(store?.store_name)
    const [storeOwner,setStoreOwner] = React.useState(store?.store_owner)
    // const storeNameField = React.useRef()
    // const storeOwnerField = React.useRef()
    
    const changeStoreName = (event)=>{
        setStoreName(event.target.value)
    }
    const changeOwnerName = (event)=>{
        setStoreOwner(event.target.value)
    }

    const storeUpdate = ()=>{
        const data={"store_owner":storeOwner}
        axios.put("store/"+storeName,data)
        .then((results) => {
    
          console.log(results?.data)
          setUpdateMode(false)
          getUser()
        }).catch((error) => {
          const message = error?.message
    
          console.log(message)
        })
      }

    return <tr>
        <td>{store?.storeId}</td>
        <td>{updateMode ?
            <input type="text" value={storeName}
                size={15} onChange={changeStoreName} /> :
                storeName}</td>

        <td>{updateMode ?
            <input type="text" value={storeOwner}
                size={15} onChange={changeOwnerName} /> :
                storeOwner}</td>

        {updateMode ? <td>
            <input type="button" value="Save" onClick={storeUpdate} />
            &nbsp;
            <input type="button" value="Cancel" onClick={() => {
                setUpdateMode(false)
            }} />
        </td> : <td>
            <input type="button" value="View" onClick={() => {
                viewItem(store)
            }} />
            &nbsp;
            <input type="button" value="Update" onClick={() => {
                setUpdateMode(true)
            }} />
            &nbsp;
            <input type="button" value="Delete" />
        </td>}
    </tr>
}

export default UpdateStore;