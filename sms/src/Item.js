import React from "react";
import axios from "./util/axiosConfig"
import { useAuthContext } from "./hooks/useAuth"
import { Container, Stack, Button, Form, Table } from "react-bootstrap"
import { useNavigate  } from "react-router-dom";



import { useParams } from "react-router-dom"

const Item = () => {
  const params = useParams();
  const { bearerToken } = useAuthContext()
  const [items,setItems] = React.useState([])


  const config = {
    headers: { Authorization: `Bearer ${bearerToken}` }
  };

  React.useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    axios.get("items/" + params.id, config)
      .then((results) => {

        console.log(results?.data)
        setItems(results?.data?.items)
      }).catch((error) => {
        const message = error?.message

        console.log(message)
      })
  }

  const navigate = useNavigate();

  return <>
  <Button variant="primary" onClick={() => navigate(-1)}>&#x2B05;&nbsp;Back</Button>
  <br/><br/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Store Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={item?.name}>
              <td>{index+1}</td>
              <td>{item?.name}</td>
              <td>{item?.price}</td>
              <td>{item?.category}</td>
              <td>{item?.store_id}</td>
              <td>
              <Button variant="primary">Edit</Button>&nbsp;
              <Button variant="success">Update</Button>&nbsp;
              <Button variant="danger">Delete</Button>
              </td>
            </tr>
            // <UpdateStore key={store?.store_name} store={store} viewItem={viewItem} getUser={getUser} ></UpdateStore>
          );
        })}
      </tbody>
    </Table>
  </>
    ;
};

export default Item;