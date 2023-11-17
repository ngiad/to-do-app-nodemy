import React, { useState } from 'react'
import api from "../utils/axios"
import { useNavigate } from 'react-router-dom'
import "../styles/login.css"

const Login = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    identifier : "",
    password : ""
  })

  const handleChangeInput = (e) => {
    setForm({...form,[e.target.name] : e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const {password,identifier}= form
    if(!password || !identifier) return 


    api.post("auth/local",{password,identifier}).then((res) => {
      if(res.data.jwt){
        localStorage.setItem("auth",JSON.stringify(res.data))
        navigate('/1')
      } 
    })
  }

  return (
    <div className='login'>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email : </label>
          <input placeholder='email ...' value={form.identifier} onChange={handleChangeInput} type="email" id='email' name='identifier' />
          <label htmlFor="password">Password : </label>
          <input placeholder='password ...' value={form.password} onChange={handleChangeInput} id='password' name='password' type="password" />
          <button>login</button>
        </form>
    </div>
  )
}

export default Login