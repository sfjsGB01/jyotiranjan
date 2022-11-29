import { useAuthContext } from "./hooks/useAuth"
import React from "react";
import axios from "./util/axiosConfig"
import UpdateStore from "./UpdateStore";
import { useNavigate } from "react-router-dom";
import { Container, Stack, Button, Form, Table } from "react-bootstrap"

const Home = () => {
  const navigate = useNavigate();
  const { bearerToken } = useAuthContext()
  const [username,setUsername] = React.useState("")
  const [stores,setStores] = React.useState([])

  const config = {
    headers: { Authorization: `Bearer ${bearerToken}` }
  };

  React.useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios.get("user",config)
      .then((results) => {

        console.log(results?.data?.username)
        setUsername(results?.data?.username)
        getStores(results?.data?.username)
      }).catch((error) => {
        const message = error?.message

        console.log(message)
      })
  }

  const getStores = (username) => {

    axios.get("stores/"+username,config)
      .then((results) => {

        console.log(results?.data?.stores)
        setStores(results?.data?.stores)
      }).catch((error) => {
        const message = error?.message

        console.log(message)
      })
  }

  const viewItem = (store) => {
    // console.log(store)
    navigate(`/item/${store?.storeId}`);
  };

  

  return (
    <>
    <h1>Hi! {username} <br/><br/> Welcome to the Home page</h1>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Store Name</th>
          <th>Owner Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {stores.map((store, index) => {
            return (
              <UpdateStore key={store?.store_name} store={store} viewItem={viewItem} getUser={getUser} ></UpdateStore>
            );
          })}
        </tbody>
        </Table>
    </>
  )
};

export default Home;