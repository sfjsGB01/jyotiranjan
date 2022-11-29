import React from "react";
import { Container, Stack, Button, Form } from "react-bootstrap"
import {Link,useNavigate} from "react-router-dom"
import axios from "./util/axiosConfig";
import { useAuthContext } from './hooks/useAuth';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [userIsEmpty, setUserIsEmpty] = React.useState(false)
  const [passwordIsEmpty, setPasswordIsEmpty] = React.useState(false)
  const [allCheck, setAllCheck] = React.useState(true)

  const { setLogin, setBearerToken } = useAuthContext()

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
    checkUsername();
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
    checkPassword();
  }
  const checkPassword = () => {
    if (password.trim() === "") {
      setPasswordIsEmpty(true)
      setAllCheck(false)
    } else {
      setPasswordIsEmpty(false)
    }
  }
  const checkUsername = () => {
    if (username.trim() === "") {
      setUserIsEmpty(true)
      setAllCheck(false)
    } else {
      setUserIsEmpty(false)
    }
  }

  const loginToSys =()=>{
    setAllCheck(true)
    checkUsername()
    checkPassword()
    const data = {
      "password": password,
      "username": username
    }
    if (allCheck) {
      console.log(data);
      axios.post("http://127.0.0.1:5000/user", data).then((result) => {
        console.log("success")
        console.log(result?.data)
        setLogin(true)
        setBearerToken(result?.data?.access_token)
        navigate("/home")
      }
      ).catch((error) => {
        console.log("error")
        console.log(error?.message)
      }

      )
    }
  }
  return (
    <Container fluid="md">
      <Stack gap={2} className="col-md-5 mx-auto">
        <Form>
          
        <Form.Group className="mb-3" controlId="username">
            <Form.Control type="text" placeholder="User Name" value={username} onChange={onUsernameChange} />
            {userIsEmpty ? <Form.Text className="text-muted">
              Plz enter username
            </Form.Text> : <></>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">

            <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
            {passwordIsEmpty ? <Form.Text className="text-muted">
              Plz enter Password
            </Form.Text> : <></>}
          </Form.Group>
        </Form>
        <Button variant="secondary" onClick={loginToSys}>Login</Button>
        <Link to="/register">
          <Button variant="outline-secondary">Register</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Login;