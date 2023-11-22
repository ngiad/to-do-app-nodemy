import React, { useState } from "react";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(loading) return
    setLoading(true)
    const { password, email, username } = form;
    if (!password || !email || !username) return;

    api
      .post("auth/local/register", { password, email, username })
      .then((res) => {
        console.log(res);
        if (res.data.jwt) {
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate("/1");
          setForm({ email: "", password: "", username: "" });
          setLoading(false)
        }
      })
      .catch((err) => {
       alert(err.message)
       setLoading(false)
      });
  };

  return (
    <div className="login">
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          placeholder="Username ..."
          value={form.username}
          onChange={handleChangeInput}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email : </label>
        <input
          placeholder="email ..."
          value={form.email}
          onChange={handleChangeInput}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password : </label>
        <input
          placeholder="password ..."
          value={form.password}
          onChange={handleChangeInput}
          id="password"
          name="password"
          type="password"
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
