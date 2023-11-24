import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CiLogout } from "react-icons/ci";
import "../styles/private.css";
import Importtask from "./Importtask";
import { IoIosRemoveCircle } from "react-icons/io";

const Private = ({handleReRender}) => {
  const navigate = useNavigate();
  const [selectAll, setSelectAll] = useState(false);
  const [isRemove, setIsRemove] = useState(
    JSON.parse(localStorage.getItem("importtan")).find(
      (item) => item.select === true
    )
  );

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("auth"))?.jwt) navigate("/login");
  }, [window.location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const handleIsRemove = () => {
    setIsRemove(
      JSON.parse(localStorage.getItem("importtan")).find(
        (item) => item.select === true
      )
    );
  };

  const handleSelectAll = () => {
    let selectAllCheck = !selectAll;
    setSelectAll(selectAllCheck);
    if (selectAllCheck)
      localStorage.setItem(
        "importtan",
        JSON.stringify(
          JSON.parse(localStorage.getItem("importtan")).map((task) => {
            return { ...task, select: true };
          })
        )
      );
    else
      localStorage.setItem(
        "importtan",
        JSON.stringify(
          JSON.parse(localStorage.getItem("importtan")).map((task) => {
            return { ...task, select: false };
          })
        )
      );
    handleIsRemove();
  };

  const handleRemoveSelect = () => {
    localStorage.setItem(
      "importtan",
      JSON.stringify(
        JSON.parse(localStorage.getItem("importtan")).filter(
          (task) => task.select !== true
        )
      )
    );

    setSelectAll(false);
    handleIsRemove();
          
  };

  const handleCheckIsModal = () => {
    setIsModal(!isModal);
    handleReRender()
  };

  const handleStopPreventDefaultClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{
          position: "fixed",
          left: "0px",
          top: "140px",
          cursor: "pointer",
        }}
      >
        <CiLogout style={{ fontSize: "30px" }} />
      </button>
      <Outlet />
      {isModal ? (
        <div onClick={handleCheckIsModal} className="importanTask">
          <div onClick={handleStopPreventDefaultClick}>
            <div className="top-importan">
              <h1>importan task</h1>
              <label htmlFor="select">
                Chọn tất cả :{" "}
                <input
                  checked={selectAll}
                  onChange={handleSelectAll}
                  type="checkbox"
                  id="select"
                />
              </label>
            </div>
            <div className="contentaskImportan">
              <ul>
                {JSON.parse(localStorage.getItem("importtan"))?.map((item) => {
                  return (
                    <Importtask
                      handleIsRemove={handleIsRemove}
                      key={item.id}
                      item={item}
                    />
                  );
                })}
              </ul>
            </div>
            {isRemove ? (
              <div className="bottomImporttan">
                <p>Xóa :</p>
                <button onClick={handleRemoveSelect}>
                  <IoIosRemoveCircle />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <button onClick={handleCheckIsModal} className="OpenModal">
          {"<"}
        </button>
      )}
      <div>
        <p style={{ textAlign: "center" }}>@ by : tran dai nghia</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Private;
