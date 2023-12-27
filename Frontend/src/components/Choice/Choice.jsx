import {Select} from 'antd';
import React from 'react';


const options  = [
    {
      label: 'ไม่มีโรคประจำตัว',
      value: '1'
    },
    {
      label: 'โรคความดันโลหิตสูง',
      value: '2'
    },
    {
      label: 'โรคท้องผูก',
      value: '3'
    },
    {
      label: 'โรคมะเร็งลำไส้',
      value: '4' 
    },
    {
      label: 'โรคริดสีดวงทวาร',
      value: '5'  
    },
    {
      label: 'โรคหัวใจและหลอดเลือด',
      value: '6'  
    },
    {
      label: 'โรคลำไส้อุดตัน',
      value: '7'  
    },
    {
      label: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง',
      value: '8'  
    },
    {
      label: 'โรคเบาหวาน',
      value: '9'  
    },
    {
      label: 'โรคความดันตํ่า',
      value: '10'  
    },
    {
      label: 'โรคไขมันในเลือด',
      value: '11'  
    },
    {
      label: 'โรคกระเพาะ/กรดไหลย้อน',
      value: '12'  
    },
  ];

const handleChange = () => {
  console.log('selected ${value}');
};

const Choice = () => (
    <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="กรุณาเลือกคำตอบต่อไปนี้ "

    onChange={handleChange}
    optionLabelProp="label"
    options={options}    
  />
);

export default Choice;