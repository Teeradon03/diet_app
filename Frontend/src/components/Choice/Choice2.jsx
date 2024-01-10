import {Select} from 'antd';
import React from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import './Choice.css';
import axios from 'axios';

const options  = [
    {
      id: 1,
        label: (
          <span>
            โลว์คาร์บหรือคีโต
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ทานอาหารคาร์โบไฮเดรตตํ่า รับประทานเนื้อสัตว์เป็นหลัก)
                </span>
          </span>),
          value: '1'
      },
      {
        id: 2,
        label: (
          <span>
            มังสวิรัติ
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานเนื้อสัตว์)
                </span>
          </span>),
          value: '2'
      },
      {
        id: 3,
        label: (
          <span>
            วีแกน
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานอาหารผลิตภัณฑ์จากสัตว์)
                </span>
          </span>),
          value: '3'
      },
      {
        id: 4,
        label: (
          <span>
            ไม่มีแลคโตส
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานอาหารที่มีแลคโตส)
                </span>
          </span>),
          value: '4'
      },
      {
        id: 5,
        label: (
          <span>
            ไม่มีกลูเตน
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานอาหารที่มีส่วนประกอบของกลูเตน)
                </span>
          </span>),
          value: '5'
      },{
        id: 6,
        label: (
          <span>
            อาหารเพสคาทาเรียน
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานเนื้อสัตว์ แต่รับประทานปลาหรือหอย)
                </span>
          </span>),
          value: '6'
      },{
        id: 7,
        label: (
          <span>
            พาเลโอไดเอท
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ทานอาหารแบบคาร์โบไฮเดรตตํ๋า ไม่ทานขนมหวาน)
                </span>
          </span>),
          value: '7'
      },{
        id: 8,
        label: (
          <span>
            ไม่มีไข่
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานอาหารที่มีไข่ หรือส่วนประกอบของไข่)
                </span>
          </span>),
          value: '8'
      },
      {
        id: 9,
        label: (
          <span>
            ไม่รับประทานอาหารทะเล
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (รับประทานอาหารที่ไม่มีส่วนประกอบของอาหารทะเล)
                </span>
          </span>),
          value: '9'
      },
      {
        id: 10,
        label: (
          <span>
            รับประทานอาหารได้แทบทุกชนิด
            <br />
            <span style={{ fontSize: 'smaller' }}>
                
                </span>
          </span>),
          value: '10'
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

  const Choice2 = () => {
    const handleChange = (value) => {
      const selectedOptions = options.filter(option => value.includes(option.value));
      const selectedLabels = selectedOptions.map(option => option.label);
      console.log('ข้อจำกัดด้านการทานอาหาร :', value);

      // เรียกใช้ sendToAPI พร้อมส่ง selectedOptions และ selectedLabels เพื่อใช้ในการส่งไปยัง API
      sendToAPI(selectedOptions, selectedLabels); 
    };


    const handleNext = () => {
      // เมื่อคลิกปุ่ม "Next" ให้เปลี่ยนไปยังหน้า '/Choice'
      window.location.href = '/Choice'; // ต้องการ URL ของหน้า Choice ที่คุณกำหนด
    };

    const buttonStyle = {
      fontWeight: 900,
      // สไตล์เพิ่มเติมตามต้องการ
    };

  
  return (
    <div>
<div className='text'>
<h1 style={buttonStyle} > ข้อจำกัดด้านการทานอาหาร (เลือกได้มากกว่า 1 ข้อ)</h1>
</div>
      <br /><br />
      <Select
        mode="multiple"
        style={{ width: '60%' }}
        placeholder="กรุณาเลือกคำตอบต่อไปนี้ "
        onChange={handleChange}
        optionLabelProp="label"
        options={options}    
      />
      <br /><br /><br />
      <div className='font-family'>
        <button className='next-list' onClick={handleNext} style={buttonStyle}>
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


  export default Choice2;
  