import { Select } from 'antd';
import React from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import './Choice.css';
import axios from 'axios';

const options  = [
    {
      id: 1,
      label: 'ไม่มีโรคประจำตัว',
      value: '1'
    },
    {
      id: 2,
      label: 'โรคความดันโลหิตสูง',
      value: '2'
    },
    {
      id: 3,
      label: 'โรคท้องผูก',
      value: '3'
    },
    {
      id: 4,
      label: 'โรคมะเร็งลำไส้',
      value: '4' 
    },
    {
      id: 5,
      label: 'โรคริดสีดวงทวาร',
      value: '5'  
    },
    {
      id: 6,
      label: 'โรคหัวใจและหลอดเลือด',
      value: '6'  
    },
    {
      id: 7,
      label: 'โรคลำไส้อุดตัน',
      value: '7'  
    },
    {
      id: 8,
      label: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง',
      value: '8'  
    },
    {
      id: 9,
      label: 'โรคเบาหวาน',
      value: '9'  
    },
    {
      id: 10,
      label: 'โรคความดันตํ่า',
      value: '10'  
    },
    {
      id: 11,
      label: 'โรคไขมันในเลือด',
      value: '11'  
    },
    {
      id: 12,
      label: 'โรคกระเพาะ/กรดไหลย้อน',
      value: '12'  
    },
  ];

  

  const sendToAPI = async (selectedOptions, selectedLabels) => {
    try {
        const data = {
            questionId: selectedOptions.map(option => option.id),
            question: selectedLabels.map(option => option.label),
            answer: 5,
            userId: 1
        };

        const response = await axios.post('http://localhost:9999/api/create-questionnaires', data);
        console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
    } catch (error) {
        console.error('Error:', error);
    }
};


const Choice = () => {
  const handleChange = (value) => {
    const selectedOptions = options.filter(option => value.includes(option.value));
    const selectedLabels = selectedOptions.map(option => option.label);
    console.log('โรคประจำตัวของคุณ:', value);

    // เรียกใช้ sendToAPI พร้อมส่ง selectedOptions และ selectedLabels เพื่อใช้ในการส่งไปยัง API
    sendToAPI(selectedOptions, selectedLabels); 
};

  const handleNext = () => {
    // เมื่อคลิกปุ่ม "หน้าถัดไป" ให้เปลี่ยนไปยัง Choice2
    window.location.href = '/Yesno'; // ต้องการ URL ของ Choice2 ที่คุณกำหนด
  };


  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div >
      <div className='text'>
        <h1 style={buttonStyle}>โรคประจำตัวของคุณ </h1>
        <p>(เลือกได้มากกว่า 1 ข้อ)</p>
      </div>
      <br /><br />
      <Select
        mode="multiple"
        style={{ width: '60%' }}
        placeholder="กรุณาเลือกโรคประจำตัว"
        onChange={handleChange}
        optionLabelProp="label"
        options={options}
      />
      <br /><br /><br />
      <div className='font-family'>
        <button className='next-list'
          onClick={handleNext}
          style={buttonStyle}
        >
          หน้าถัดไป
        </button>
      </div>
      <div>
        <button className='chevron-list' style={buttonStyle}>
          <VscChevronLeft />{/* ไอคอนย้อนกลับ */}
        </button>
      </div>
    </div>
  );
};

export default Choice;