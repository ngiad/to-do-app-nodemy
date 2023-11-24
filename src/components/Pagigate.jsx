import React from "react";
import { Link } from "react-router-dom";

const Pagigate = ({ meta,pagetotal }) => {
  const page = [];

  if (meta?.pagination?.pageCount) {
    for (let index = 1; index <= meta.pagination.pageCount; index++) {
      page.push(index);
    }
  }
  

  console.log(pagetotal);

  return (
    <div style={{padding: "24px"}}>
      {page.map((item) => {
        return (
          <Link className={+pagetotal === item ? "active" : "" } style={{ margin: "0 12px",padding: "8px", border : "1px solid #ccc" }} to={`/${item}`} key={item}>
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagigate;
