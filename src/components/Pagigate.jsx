import React from "react";
import { Link } from "react-router-dom";

const Pagigate = ({ meta,pagetotal }) => {
  const page = [];

  if (meta?.pagination?.pageCount) {
    for (let index = 1; index <= meta.pagination.pageCount; index++) {
      page.push(index);
    }
  }
  

  return (
    <div>
      {page.map((item) => {
        return (
          <Link style={{ margin: "0 12px",padding: "8px", border : "1px solid #ccc" }} to={`/${item}`} key={item}>
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagigate;
