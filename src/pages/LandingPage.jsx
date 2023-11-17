import React from "react";
import homeimage from "../assets/homeimage.jpg";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <div className="contener">
      <div className="content">
        <div className="left">
          <h2>Tiện ích giúp đỡ công việc số 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            totam laudantium nostrum laboriosam blanditiis fugiat saepe
            consequuntur deleniti similique a tempore perspiciatis doloremque
            esse omnis ratione illo incidunt, culpa accusantium. Quod illum
            mollitia cum fugiat cumque nam debitis harum blanditiis possimus
            deserunt fuga perspiciatis, illo eligendi ab neque! Quos quo cumque
            illum nulla necessitatibus non. Nostrum deserunt hic labore aperiam?
            Soluta recusandae hic itaque nesciunt reprehenderit exercitationem
            doloribus ducimus veritatis nihil corporis. Minus, deserunt
            voluptate. Tempora laborum ea aperiam nesciunt autem, veritatis
            voluptates eos similique nobis aliquid facere, ex eligendi.
          </p>
        </div>
        <div className="right">
          <img src={homeimage} alt="homeimage" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
