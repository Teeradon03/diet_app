import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Program_IF.css";
import "./IF08.css";
 

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
    <div className="-font-family">
      <br />
      <br />
      <h1 className="-text">การลดน้ำหนัก IF </h1>
      <br />
      <h2 className="-text"> วันที่ {currentDay} </h2>
      <br />
      <br />
      {/* Card */}
      <div className="-container ">
        <Link className="-card" to={"/IF08"}>
          <div className="-text-card">08.00 น.</div>
        </Link>
        <Link className="-card" to={"/IF12"}>
          <div className="-text-card">12.00 น.</div>
        </Link>
        <Link className="-card" to={"/IF14"}>
          <div className="-text-card">14.00 น.</div>
        </Link>
        <Link className="-card" to={"/IF15"}>
          <div className="-text-card">15.00 น.</div>
        </Link>
      </div>

      <div className="-button-container">
        <button className="-edit-button" > แก้ไขข้อมูล </button>

        <Link to='/Home48'>
        <button className="-save-button" onClick={handleSaveButtonClick}>
          บันทึกข้อมูล
        </button>
        </Link>
      </div>
    </div>
  );
};
 
export default Program_IF;