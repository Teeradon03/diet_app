import { Select } from 'antd';
import React, { useState } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import './Choice.css';


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
    value: '1'
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
    value: '2'
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
    value: '3'
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
    value: '4'
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
    value: '5'
  }, {
    label: (
      <span>
        อาหารเพสคาทาเรียน
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ไม่รับประทานเนื้อสัตว์ แต่รับประทานปลาหรือหอย)
        </span>
      </span>),
    value: '6'
  }, {
    label: (
      <span>
        พาเลโอไดเอท
        <br />
        <span style={{ fontSize: 'smaller' }}>
          (ทานอาหารแบบคาร์โบไฮเดรตตํ๋า ไม่ทานขนมหวาน)
        </span>
      </span>),
    value: '7'
  }, {
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

const Choice2 = () => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleChange = (value) => {
    const selectedOptions = options.filter(option => value.includes(option.value));
    const selectedLabels = selectedOptions.map(option => option.label);
    setSelectedLabels(selectedLabels);
    console.log('ข้อจำกัดด้านการทานอาหาร:', selectedLabels);
  };

  const handleNext = () => {
    if (selectedLabels.length > 0) {
      window.location.href = '/Choice';
    } else {
      alert("กรุณาเลือกข้อจำกัดด้านการทานอาหารตัวอย่างน้อย 1 ข้อ");
    }
  };

  const handleBack = () => {
    window.location.href =('/Question'); // เปลี่ยน URL และโปรแกรมให้ตรงกับ URL ของ Choice2
  };

  const buttonStyle = {
    fontWeight: 900,
    // สไตล์เพิ่มเติมตามต้องการ
  };


  return (
    <div>
      <div>
        <h1 className='text' style={buttonStyle} > ข้อจำกัดด้านการทานอาหาร (เลือกได้มากกว่า 1 ข้อ)</h1>
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
        <button className='chevron-list' onClick={handleBack} style={buttonStyle}>
          <VscChevronLeft />{/* ไอคอนย้อนกลับ */}
        </button>
      </div>
    </div>
  );
};


export default Choice2;
