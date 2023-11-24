import React, { useEffect, useState } from "react";

const Importtask = ({ item, handleIsRemove }) => {
  const [select, setSelect] = useState(item.select);
  useEffect(() => {
    setSelect(item.select);
  }, [item]);

  const handleChangeselect = (item) => {
    setSelect(!select);
    localStorage.setItem(
      "importtan",
      JSON.stringify(
        JSON.parse(localStorage.getItem("importtan")).map((task) =>
          task.id === item.id ? { ...task, select: !task.select } : task
        )
      )
    );
    handleIsRemove();
  };

  return (
    <li>
      <input
        id={`id${item.id}`}
        onChange={() => handleChangeselect(item)}
        type="checkbox"
        checked={select}
      />
      <label style={{cursor : "pointer"}} htmlFor={`id${item.id}`}>{item.title}</label>
    </li>
  );
};

export default Importtask;
