import React, { useState } from "react";
import "./AllTabs/tab.css";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import { BsBookHalf } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { GiBearFace } from "react-icons/gi";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          <BsBookHalf />
          <p className="tabtext">lession</p>
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          <RiGraduationCapLine />
          <p className="tabtext">Review</p>
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          <GiBearFace />
          <p className="tabtext">Asked On Flexi</p>
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
