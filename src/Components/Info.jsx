import React from "react";
import elon from "../../resources/ElonMusk.jpg";

const Info = () => {
  return (
    <div className="info-card">
      <img src={elon} />
      <div className="info">
        <h4>Elon Musk</h4>
        <p>CEO of Tesla</p>
        <small>
          <a href="https://www.tesla.com/elon-musk">
            https://www.tesla.com/elon-musk
          </a>
        </small>
        <button className="btn btn-light">Email</button>
      </div>
    </div>
  );
};

export default Info;
