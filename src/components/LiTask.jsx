import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import api from "../utils/axios";
import { toast } from "react-toastify";

const LiTask = ({ item, RemoveTask }) => {
  const [checked, setChecked] = useState(item.attributes.complete);

  const handleInputComplete = async () => {
    setChecked(!checked);
    api
      .put(
        `tasks/${item.id}`,
        {
          data: {
            complete: !checked,
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
      )
      .then((response) => {
        toast(
          `task ${
            response.data.data.attributes.complete
              ? "đã hoàn thành"
              : "chưa hoàn thành"
          }`
        );
        setChecked(response.data.data.attributes.complete);
      })
      .catch(() => {
        toast.warning("Đã sẩy ra lỗi!")
        setChecked(checked);
      });
  };

  const handleRemove = () => {
    let input =  prompt("xác nhận xóa 'yes': ")
    if(input !== "yes") return
    api
      .delete(`tasks/${item.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("auth")).jwt
          }`,
        },
      })
      .then(() => {
        toast.success("Đã xóa thành công!")
        RemoveTask(item.id);
      })
      .catch(() => {
        toast.warning("Đã sẩy ra lỗi!")
      });
  };
  return (
    <li className="litask">
      <div>
        <input
          checked={checked}
          type="checkbox"
          onChange={handleInputComplete}
        />
      </div>

      <div>
        <Link style={{ display: "block" }} to={`/todo/${item.id}`}>
          {item.attributes.title}
        </Link>
      </div>

      <div>
        <button onClick={handleRemove}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  );
};

export default LiTask;
