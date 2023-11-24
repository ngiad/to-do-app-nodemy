import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import Pagigate from "../components/Pagigate";
import "../styles/create_detail.css";
import { MdPlaylistAdd } from "react-icons/md";
import LiTask from "../components/LiTask";

const HomePage = ({ isReRender,handleReRender }) => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    if (isNaN(page)) navigate("/1");
      api
        .get("tasks?=&sort[0]=createdAt:desc&pagination[page]=" + page)
        .then((data) => {
          setData(data.data.data);
          setMeta(data.data.meta);
        });

    return () => setData([]);
  }, [page, isReRender]);

  const handleClick = () => {
    navigate("/create");
  };

  const RemoveTask = (id) => {
    setData(data.filter((item) => item.id !== id));
    handleReRender()
  };

  return (
    <div className="contener">
      <div className="Contenttask">
        <div className="header">
          <div className="left">
            <h1>Task list</h1>
          </div>
          <div className="right">
            <button onClick={handleClick}>
              <MdPlaylistAdd />
            </button>
          </div>
        </div>
        <div className="listTask">
          <ul>
            {data.map((item, index) => {
              return <LiTask RemoveTask={RemoveTask} key={index} item={item} />;
            })}
          </ul>
          <Pagigate meta={meta} pagetotal={page}></Pagigate>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
