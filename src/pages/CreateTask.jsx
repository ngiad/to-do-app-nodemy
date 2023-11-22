import React from 'react'
import Contenttask from '../components/Contenttask'
import "../styles/create_detail.css"
import api from '../utils/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CreateTask = () => {
  const navigate = useNavigate()
  const handleSubmit = (form) => {
    if(!form) return

    api.post(
      "tasks",
      {
        data: {
          title: form,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("auth")).jwt
          }`
        }
      }
    ).then(() => {
      toast.success("Đã thêm thành công task mới.")
      navigate("/1")
    })
  };
  return (
    <div className='contener'>
        <Contenttask title="thêm task" data={{title : ""}} handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreateTask