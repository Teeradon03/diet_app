import { Select } from 'antd';
import React, { useState } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import './Choice.css';
import axios from 'axios';


const options = [
  {
    label: (
      <span>
        โลว์คาร์บหรือคีโต
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ทานอาหารคาร์โบไฮเดรตตํ่า รับประทานเนื้อสัตว์เป็นหลัก)
        </span>
      </span>),
    value: 1
  },
  {
    label: (
      <span>
        มังสวิรัติ
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานเนื้อสัตว์)
        </span>
      </span>),
    value: 2
  },
  {
    label: (
      <span>
        วีแกน
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานอาหารผลิตภัณฑ์จากสัตว์)
        </span>
      </span>),
    value: 3
  },
  {
    label: (
      <span>
        ไม่มีแลคโตส
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานอาหารที่มีแลคโตส)
        </span>
      </span>),
    value: 4
  },
  {
    label: (
      <span>
        ไม่มีกลูเตน
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานอาหารที่มีส่วนประกอบของกลูเตน)
        </span>
      </span>),
    value: 5
  }, {
    label: (
      <span>
        อาหารเพสคาทาเรียน
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานเนื้อสัตว์ แต่รับประทานปลาหรือหอย)
        </span>
      </span>),
    value: 6
  }, {
    label: (
      <span>
        พาเลโอไดเอท
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ทานอาหารแบบคาร์โบไฮเดรตตํ๋า ไม่ทานขนมหวาน)
        </span>
      </span>),
    value: 7
  }, {
    label: (
      <span>
        ไม่มีไข่
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานอาหารที่มีไข่ หรือส่วนประกอบของไข่)
        </span>
      </span>),
    value: 8
  },
  {
    label: (
      <span>
        ไม่รับประทานอาหารทะเล
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (รับประทานอาหารที่ไม่มีส่วนประกอบของอาหารทะเล)
        </span>
      </span>),
    value: 9
  },
  {
    label: (
      <span>
        รับประทานอาหารได้แทบทุกชนิด
        <br />
        <span style={{ fontSize: 'smaller' }}>

        </span>
      </span>),
    value: 10
  },
];

const sendToAPI = async (selectedOptions, selectedLabels) => {
  try {
    const data = {
      questionId: selectedOptions.map(option => option.id),
      question: selectedLabels.map(option => option.label),
      answer: value,
    };

    const response = await axios.post('http://localhost:9999/api/form/create-questionnaires', data);
    console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
  } catch (error) {
    console.error('Error:', error);
  }
};

const Choice2 = () => {
  const [selectedOptions, setSelectedOptions, questionId] = useState([]);

  const handleChange = (value) => {
    const selectedOptions = options.filter(option => value.includes(option.value));
    const selectedLabels = selectedOptions.map(option => option.label);
    setSelectedLabels(selectedLabels);
    console.log('ข้อจำกัดด้านการทานอาหาร:', selectedLabels);

    // เรียกใช้ sendToAPI พร้อมส่ง selectedOptions และ selectedLabels เพื่อใช้ในการส่งไปยัง API
    sendToAPI(selectedOptions, selectedLabels);
  };

  const handleNext = () => {
    if (selectedLabels.length > 0) {
      window.location.href = '/Choice';
    } else {
      alert("กรุณาเลือกข้อจำกัดด้านการทานอาหารตัวอย่างน้อย 1 ข้อ");
    }
  };


  const handleBack = () => {
    window.location.href = ('/Question'); // เปลี่ยน URL และโปรแกรมให้ตรงกับ URL ของ Choice2
  };

  const buttonStyle = {
    fontWeight: 900,
    // สไตล์เพิ่มเติมตามต้องการ
  };


  return (
    <div>
      <div>

        <h1 className='text' style={buttonStyle}> ข้อจำกัดด้านการทานอาหาร (เลือกได้มากกว่า 1 ข้อ)</h1>
      <br/><br/><br/><br/>
        <h1 className='text' style={buttonStyle} > ข้อจำกัดด้านการทานอาหาร (เลือกได้มากกว่า 1 ข้อ)</h1>
      </div>
      <br /><br />
      <Select
        className='text-box' // กำหนดชื่อคลาสสไตล์ขององค์ประกอบ Select
        placeholder="กรุณาเลือกคำตอบต่อไปนี้ " // ข้อความที่จะแสดงในกล่องเลือกก่อนที่ผู้ใช้จะเลือก
        onChange={handleChange} // ฟังก์ชันที่จะเรียกเมื่อมีการเปลี่ยนแปลงในการเลือก
        optionLabelProp="label" // ระบุ property ของ option ที่จะใช้เป็น label แสดงในรายการเลือก
        options={options} // รายการตัวเลือกที่จะแสดงใน Select
        mode="multiple" // ให้สามารถเลือกหลายตัวเลือกได้
        tags={false} // ปิดใช้งานความสามารถในการเพิ่มตัวเลือก
        filterOption={false} // ปิดใช้งานการกรองตัวเลือก
        onKeyDown={(e) => {
          // ตรวจสอบถ้ามีการกดปุ่มที่เป็นตัวอักษร ให้ยกเลิกการกด
          if (e.key.length === 1) {
            e.preventDefault();
          }
        }}
      />
      <br /><br /><br />
      <div className='font-family'>
        <button className='next-list' onClick={handleNext} style={buttonStyle}>
          ถัดไป
        </button>
      </div>
      <div>
        <button className='chevron-list' onClick={handleBack} style={buttonStyle}>
          <VscChevronLeft />{/* ไอคอนย้อนกลับ */}
        </button>
      </div>
    </div>
  );
};


export default Choice2;