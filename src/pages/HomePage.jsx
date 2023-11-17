import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagigate from "../components/Pagigate";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [meta,setMeta] = useState({})
  const navigate = useNavigate()
  const { page }  = useParams()

  useEffect(() => {
    if(isNaN(page)) navigate('/1')
    api
      .get("tasks?=&sort[0]=createdAt:desc&pagination[page]="+page)
      .then((data) => {
        setData(data.data.data);
        setMeta(data.data.meta)
      });

      return () => setData([])
  }, [page]);


  return <div>
    <h1>To-do app</h1>
    <ul>
    {
      data.map((item,index) => {
        return <li key={index}><Link style={{display : "block"}} to={`/todo/${item.id}`}>{item.attributes.title}</Link></li> 
      })
    }
    </ul>
    <Pagigate meta={meta}></Pagigate>
  </div>;
};

export default HomePage;
