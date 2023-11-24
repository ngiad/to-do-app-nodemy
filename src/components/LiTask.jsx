import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import api from "../utils/axios";
import { toast } from "react-toastify";
import { HiOutlineSave } from "react-icons/hi";
import { FaFileExcel } from "react-icons/fa";

const LiTask = ({ item, RemoveTask }) => {
  const [checked, setChecked] = useState(item.attributes.complete);
  const [save, setSave] = useState(
    !!JSON.parse(localStorage.getItem("importtan"))?.find(
      (task) => task.id === item.id
    )
  );

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
        toast.warning("Đã sẩy ra lỗi!");
        setChecked(checked);
      });
  };

  const handleRemove = () => {
    let input = prompt("xác nhận xóa 'yes': ");
    if (input !== "yes") return;
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
        toast.success("Đã xóa thành công!");
        RemoveTask(item.id);
        localStorage.setItem(
          "importtan",
          JSON.stringify(
            JSON.parse(localStorage.getItem("importtan")).filter(
              (task) => task.id !== item.id
            )
          )
        );
      })
      .catch(() => {
        toast.warning("Đã sẩy ra lỗi!");
      });
  };

  const handleAddImportanTask = () => {
    if (!localStorage.getItem("importtan")) {
      localStorage.setItem("importtan", JSON.stringify([]));
    }
    const getImporttan = JSON.parse(localStorage.getItem("importtan"));
    if (getImporttan.find((task) => task.id === item.id)) {
      localStorage.setItem(
        "importtan",
        JSON.stringify(getImporttan.filter((task) => task.id !== item.id))
      );
      toast.success("xóa task quan trọng!")
    } else {
      localStorage.setItem(
        "importtan",
        JSON.stringify([
          ...getImporttan,
          { ...item.attributes, id: item.id, select: false },
        ])
      );
      toast.success("thêm task quan trọng!")
    }
    setSave(
      !!JSON.parse(localStorage.getItem("importtan"))?.find(
        (task) => task.id === item.id
      )
    );
    
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
        <button onClick={handleAddImportanTask}>
          {save ? <FaFileExcel /> : <HiOutlineSave />}
        </button>
        <button onClick={handleRemove}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  );
};

export default LiTask;
