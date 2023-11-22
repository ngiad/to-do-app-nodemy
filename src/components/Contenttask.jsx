import React, { useEffect, useState } from "react";
import "../styles/create_detail.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Contenttask = (props) => {
  const navigate = useNavigate()
   const [form, setForm] = useState(props.data.title);

   useEffect(() => {
    setForm(props.data.title)
   },[props.data.title])

   
   const Submit = (e) => {
    e.preventDefault()
    props.handleSubmit(form)
   }


  
  return (
    <div className="Contenttask">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="form">
        <form onSubmit={Submit}>
          <label htmlFor="title">title : </label>
          <input
            onChange={(e) => setForm(e.target.value)}
            type="text"
            id="title"
            value={form}
          />
          <button>add</button>
        </form>
      </div>
      <button onClick={() => navigate(-1)}><MdOutlineKeyboardBackspace style={{fontSize : "30px"}} /></button>
    </div>
  );
};

export default Contenttask;
