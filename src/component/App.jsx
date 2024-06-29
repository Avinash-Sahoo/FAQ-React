import React from "react";
import "../stylesheet/App.css";
import data from "../data.json";
import Faq from "./Faq";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="head">
            <h1>FAQ'S</h1>
          </div>
          {data.map((eachdata, i) => (
            <Faq key={i} eachdata={eachdata} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
