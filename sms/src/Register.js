import React from "react";
import { Container, Alert, Stack, Button, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import axios from './util/axiosConfig'
import timeOut from "./util/util";

const Register = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [firstNameIsEmpty, setFirstNameIsEmpty] = React.useState(false)
  const [lastNameIsEmpty, setLastNameIsEmpty] = React.useState(false)
  const [userIsEmpty, setUserIsEmpty] = React.useState(false)
  const [passwordIsEmpty, setPasswordIsEmpty] = React.useState(false)
  const [allCheck, setAllCheck] = React.useState(true)
  const [showAlert,setShowAlert] = React.useState(false)

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value)
    checkFirstName();
  }

  const onLastNameChange = (event) => {
    setLastName(event.target.value)
    checkLastName();
  }

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
    checkUsername();
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
    checkPassword();
  }

  const registerMe = () => {
    setAllCheck(true)
    checkFirstName()
    checkLastName()
    checkUsername()
    checkPassword()
    const data = {
      "firstName": firstName,
      "lastName": lastName,
      "password": password,
      "username": username
    }
    if (allCheck) {
      console.log(data);
      axios.post("http://127.0.0.1:5000/register", data).then((result) => {
        console.log("success")
        console.log(result?.data)
        setShowAlert(true)
        timeOut(1000)
        navigate("/login")
      }
      ).catch((error) => {
        console.log("error")
        console.log(error?.message)
      }

      )
    }
  }

  const checkFirstName = () => {
    if (firstName.trim() === "") {
      setFirstNameIsEmpty(true)
      setAllCheck(false)
    } else {
      setFirstNameIsEmpty(false)
    }
  }
  const checkLastName = () => {
    if (lastName.trim() === "") {
      setLastNameIsEmpty(true)
      setAllCheck(false)
    } else {
      setLastNameIsEmpty(false)
    }
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
  return (
    <Container fluid="md" >
      
      <Stack gap={2} className="col-md-5 mx-auto" >
        <Form>
          <Form.Group className="mb-3" controlId="fName">

            <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={onFirstNameChange} />
            {firstNameIsEmpty ? <Form.Text className="text-muted">
              Plz enter First Name
            </Form.Text> : <></>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="lName">

            <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={onLastNameChange} />
            {lastNameIsEmpty ? <Form.Text className="text-muted">
              Plz enter Last Name
            </Form.Text> : <></>}
          </Form.Group>
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
        <Button variant="secondary" onClick={registerMe}>Register</Button>
        <Link to="/login">
          <Button variant="outline-secondary">Login</Button>
        </Link>
      </Stack>
      {showAlert?<Alert variant="success">
        <Alert.Heading>Registetion success</Alert.Heading>
        <p>
          Moving To Login Page
        </p>
      </Alert>:<></>}
    </Container>
  );
};

export default Register;