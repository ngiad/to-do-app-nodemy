import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/create_detail.css";
import api from "../utils/axios";
import "../styles/create_detail.css";
import Contenttask from "../components/Contenttask";
import { toast } from "react-toastify";

const DetailTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [data, setData] = useState();
  useEffect(() => {
    api.get(`tasks/${id}?populate=*`).then((data) => {
      setData(data.data.data);
    });
  }, [id]);

  const submit = (form) => {
    api.post(
      "/tasks",
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
          }`,
        },
      }
    ).then(() => {
      toast.success("đã sửa lại task thành công!")
      navigate("/1")
    }).catch(() => toast.warning("đã sẩy ra lỗi"))
  };

  return (
    <div className="contener">
      <Contenttask
        handleSubmit={submit}
        title="Sửa task"
        data={{ title: data?.attributes?.title }}
      />
    </div>
  );
};

export default DetailTodo;
