import React from 'react'
import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import axios from './util/axiosConfig'
import { useAuthContext } from './hooks/UseAuth'

function Login() {
  const [username,setUsername] = React.useState("")
  const [password,setPassword] = React.useState("")
  const { setLogin, setBearerToken } = useAuthContext()
  const [userIsEmpty,setUserIsEmpty] = React.useState(false)
  const [passwordIsEmpty,setPasswordIsEmpty] = React.useState(false)

  const navigate = useNavigate()
  const loginToSys = (event) =>{
    event.preventDefault()
    if(username ==="" || password===""){
      setUserIsEmpty(true)
      setPasswordIsEmpty(true)
      return
    }
    console.log({"username":username,"password":password})

    axios.post("user",{'username':username,'password':password}).then((result)=>{
      console.log("success")
      console.log(result?.data)
      setLogin(true)
      setBearerToken("token")
    }).catch((error)=>{
      console.log("error")
      console.log(error?.message)
    })

    navigate("/Home")
  }

  const onUsernameChange = (event)=>{
    setUsername(event.target.value)
  }

  const onPasswordChange = (event)=>{
    setPassword(event.target.value)
  }

  const checkUsername = (event)=>{
    if(username===""){
      setUserIsEmpty(true)
    }else{
      setUserIsEmpty(false)
    }
  }

  const checkPassword = (event)=>{
    if(password===""){
      setPasswordIsEmpty(true)
    }else{
      setPasswordIsEmpty(false)
    }
  }


  return (
    <div>
      <form>
        <input type="text" placeholder='Username' value={username} onChange={onUsernameChange} onBlur={checkUsername} style={{border:userIsEmpty?"1px solid red":"1px solid black"}}/>
        <br />
        <br />
        <input type="password" placeholder='Password' value={password} onChange={onPasswordChange} onBlur={checkPassword} style={{border:passwordIsEmpty?"1px solid red":"1px solid black"}}/>
        <br />
        <br />
        <input type="submit" value="Login" onClick={loginToSys}/>
      </form>
      
        <Link to="/register">Register</Link>
      
    </div>

  )
}

export default Login