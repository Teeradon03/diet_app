import {Select} from 'antd';
import React from 'react';


const options  = [
    {
      label: 'ไม่มีโรคประจำตัว',
      value: 'ไม่มีโรคประจำตัว'
    },
    {
      label: 'โรคความดันโลหิตสูง',
      value: 'โรคความดันโลหิตสูง'
    },
    {
      label: 'โรคท้องผูก',
      value: 'โรคท้องผูก'
    },
    {
      label: 'โรคมะเร็งลำไส้',
      value: 'โรคมะเร็งลำไส้' 
    },
    {
      label: 'โรคริดสีดวงทวาร',
      value: 'โรคริดสีดวงทวาร'  
    },
    {
      label: 'โรคหัวใจและหลอดเลือด',
      value: 'โรคหัวใจและหลอดเลือด'  
    },
    {
      label: 'โรคลำไส้อุดตัน',
      value: 'โรคลำไส้อุดตัน'  
    },
    {
      label: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง',
      value: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง'  
    },
    {
      label: 'โรคเบาหวาน',
      value: 'โรคเบาหวาน'  
    },
    {
      label: 'โรคความดันตํ่า',
      value: 'โรคความดันตํ่า'  
    },
    {
      label: 'โรคไขมันในเลือด',
      value: 'โรคไขมันในเลือด'  
    },
    {
      label: 'โรคกระเพาะ/กรดไหลย้อน',
      value: 'โรคกระเพาะ/กรดไหลย้อน'  
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