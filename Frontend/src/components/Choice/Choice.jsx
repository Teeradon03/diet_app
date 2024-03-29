import { Select } from "antd";
import React, { useState } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import "./Choice.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const options = [
  {
    id: 1,
    label: "ไม่มีโรคประจำตัว",
    value: 1,
  },
  {
    id: 2,
    label: "โรคความดันโลหิตสูง",
    value: 2,
  },
  {
    id: 3,
    label: "โรคท้องผูก",
    value: 3,
  },
  {
    id: 4,
    label: "โรคมะเร็งลำไส้",
    value: 4,
  },
  {
    id: 5,
    label: "โรคริดสีดวงทวาร",
    value: 5,
  },
  {
    id: 6,
    label: "โรคหัวใจและหลอดเลือด",
    value: 6,
  },
  {
    id: 7,
    label: "โรคลำไส้อุดตัน",
    value: 7,
  },
  {
    id: 8,
    label: "โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง",
    value: 8,
  },
  {
    id: 9,
    label: "โรคเบาหวาน",
    value: 9,
  },
  {
    id: 10,
    label: "โรคความดันตํ่า",
    value: 10,
  },
  {
    id: 11,
    label: "โรคไขมันในเลือด",
    value: 11,
  },
  {
    id: 12,
    label: "โรคกระเพาะ/กรดไหลย้อน",
    value: 12,
  },
];

const sendToAPI = async (selectedOptions, selectedLabels) => {
  try {
    const data = {
      questionId: selectedLabels,
      answer: selectedOptions,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_URL_API}/api/form/create-questionnaires`,
      data,
      {
        withCredentials: true,
      }
    );
    // console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
  } catch (error) {
    // console.error("Error:", error);
  }
};

const Choice = () => {
  const [selectedOptions, setSelectedOptions, questionId] = useState([]);
  const navi = useNavigate()
  const handleChange = (value) => {
    const selectedOptions = options.filter((option) =>
      value.includes(option.value)
    );
    setSelectedOptions(value);
    const questionId = 11;

    // console.log("QuestionId :", questionId);
    // console.log("AnswerId :", value);
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      // เรียกใช้ sendToAPI เพื่อส่งข้อมูลไปยัง API
      sendToAPI(selectedOptions, 11); // 11 คือ questionId ที่คุณกำหนด
      navi("/Yesno") // ต้องการ URL ของ Yesno ที่คุณกำหนด
    } else {
      alert("กรุณาเลือกโรคประจำตัวอย่างน้อย 1 ข้อ");
    }
  };

  const handleBack = () => {
    navi("/Choice2") // เปลี่ยน URL และโปรแกรมให้ตรงกับ URL ของ Choice2
  };

  const buttonStyle = {
    fontWeight: 900,
  };

  return (
    <div>
      <div className="text">
        <h1 style={buttonStyle}>โรคประจำตัวของคุณ </h1>
        <h3>(เลือกได้มากกว่า 1 ข้อ)</h3>
      </div>
      <br />
      <br />
      <Select
        mode="multiple"
        allowClear
        className="-text-box"
        placeholder="กรุณาเลือกโรคประจำตัว"
        onChange={handleChange}
        optionLabelProp="label"
        options={options.map((option) => ({
          ...option,
          label: <span style={{ fontSize: "22px" }}>{option.label}</span>,
        }))}
        size="large"
      />
      <br />
      <br />
      <br />
      <div className="font-family">
        <button className="next-list" onClick={handleNext} style={buttonStyle}>
          ถัดไป
        </button>
      </div>
      <div>
        <button
          className="chevron-list"
          onClick={handleBack}
          style={buttonStyle}
        >
          <VscChevronLeft />
          {/* ไอคอนย้อนกลับ */}
        </button>
      </div>
    </div>
  );
};

export default Choice;
