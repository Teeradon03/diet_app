// CardList.jsx
import React from "react";
import { Select, Card } from "antd";
import "./CardList.css"; // Import CSS

const CardList = () => {
  const options = [
    {
      id: 1,
      label: "08.00 น.",
      value: 1,
    },
    {
      id: 2,
      label: "12.00 น.",
      value: 2,
    },
    {
      id: 3,
      label: "14.00 น.",
      value: 3,
    },
    {
      id: 4,
      label: "15.00 น.",
      value: 4,
    },
  ];

  const handleChange = (value) => {
    const selectedOptions = options.filter((option) =>
      value.includes(option.value)
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>การลดน้ำหนัก IF </h1>
      <br />
      <h2> วันที่ </h2>
      <br />
      <br />
      <div className="container">
        {" "}
        {/* เพิ่ม className "container" */}
        <Card>Time</Card>
        <Select
          mode="single"
          allowClear
          className="text-box"
          placeholder="เลือกเวลา"
          onChange={handleChange}
          optionLabelProp="label"
          options={options.map((option) => ({
            ...option,
            label: <span style={{ fontSize: "22px" }}>{option.label}</span>,
          }))}
          size="large"
        />
      </div>
    </div>
  );
};

export default CardList;
