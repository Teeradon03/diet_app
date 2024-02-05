import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Program_IF.css";
const Program_IF = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSaveButtonClick = () => {
    // อัปเดตวันปัจจุบัน และรีเซ็ตเป็น 1 ถ้าค่าปัจจุบันถึง 31
    setCurrentDay((prevDay) => (prevDay === 31 ? 1 : prevDay + 1));
  };

  const handleSaveButton = (data) => {
    // Handle the received data from the Menu component
    setSelectedMenu(data.selectedMenu);
    setSelectedOptions(data.selectedOptions);

    // Update the current day and reset to 1 if the current day is 31
    setCurrentDay((prevDay) => (prevDay === 31 ? 1 : prevDay + 1));
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>การลดน้ำหนัก IF </h1>
      <br />
      <h2> วันที่ {currentDay} </h2>
      <br />
      <br />
      <div className="container ">
        <Link className="card" to={"/fate2/menu"}>
          <div>08.00
            
          </div>
        </Link>
        <Link className="card" to="/a">
          <div>12.00 น.</div>
        </Link>
        <Link className="card" to="/a">
          <div>14.00 น.</div>
        </Link>
        <Link className="card" to="/a">
          <div>15.00 น.</div>
        </Link>
      </div>

      <div className="button-container">
        <button className="edit-button">แก้ไขข้อมูล</button>
        <button className="save-button" onClick={handleSaveButtonClick}>
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  );
};

export default Program_IF;
