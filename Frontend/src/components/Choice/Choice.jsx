import { Select } from 'antd';
import React, { useState } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import './Choice.css';



const options = [
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


  const Choice = () => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleChange = (value) => {
    const selectedOptions = options.filter(option => value.includes(option.value));
    const selectedLabels = selectedOptions.map(option => option.label);
    setSelectedLabels(selectedLabels);
    console.log('โรคประจำตัวของคุณ:', selectedLabels);
  };

  const handleNext = () => {
    if (selectedLabels.length > 0) {
      window.location.href = '/Yesno'; // เปลี่ยน URL ให้ตรงกับ URL ของ Yesno
    } else {
      alert("กรุณาเลือกโรคประจำตัวอย่างน้อย 1 ข้อ");
    }
  };

  const handleBack = () => {
    window.location.href =('/Choice2'); // เปลี่ยน URL และโปรแกรมให้ตรงกับ URL ของ Choice2
  };

  const buttonStyle = {
    fontWeight: 900,
  };

  return (
    <div>
      <div>
        <h1 className='text' style={buttonStyle}>โรคประจำตัวของคุณ</h1>
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
        <button className='next-list' onClick={handleNext} style={buttonStyle}>
          หน้าถัดไป
        </button>
      </div>
      <div>
        <button className='chevron-list' onClick={handleBack} style={buttonStyle}>
          <VscChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default Choice;