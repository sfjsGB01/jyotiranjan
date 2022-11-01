import React from "react";
import axios from "./util/axiosConfig";
import AddStore from "./AddStore";
import UpdateItem from "./UpdateItem";
import { useAuthContext } from "./hooks/UseAuth";
import Header from "./Header";

import { useNavigate } from "react-router-dom";

const Store = () => {
  const [showAddForm,setShowAddForm] = React.useState(false)
  const [stores, setStores] = React.useState(storesList)

  
  React.useEffect(() => {
    getStores()
  }, [])

  const getStores = ()=>{
    setStores(storesList)
  }

  const addStore = ()=>{
    setShowAddForm(true)
  }

  const saveNewStore = (formData)=>{
    console.log(formData)
    storesList.push(formData)
    getStores()
  }

  return (
    <div>
      <Header />
      <h1>Stores</h1>

      <input type="button" value="Add" onClick={addStore} />
      {showAddForm? <AddStore setShowAddForm={setShowAddForm} saveNewStore={saveNewStore}/> : null}

      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Owner</th>

            <th>Actions</th>
          </tr>

          {stores.map((store) => {
            return (
              <UpdateItem store={store} key={store?.id}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Store;

const storesList = [
  { id: "100", name: "SMart", owner: "Sreekanth" },
  { id: "200", name: "SMart", owner: "Sreekanth" },
  { id: "300", name: "SMart", owner: "Sreekanth" },
  { id: "400", name: "SMart", owner: "Sreekanth" },
  { id: "500", name: "SMart", owner: "Sreekanth" },
];