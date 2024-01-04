import {Select} from 'antd';
import React from 'react';


const options  = [
    {
      id: 1,
      label: 'ไม่มีโรคประจำตัว',
      value: 'ไม่มีโรคประจำตัว'
    },
    {
      id: 2,
      label: 'โรคความดันโลหิตสูง',
      value: 'โรคความดันโลหิตสูง'
    },
    {
      id: 3,
      label: 'โรคท้องผูก',
      value: 'โรคท้องผูก'
    },
    {
      id: 4,
      label: 'โรคมะเร็งลำไส้',
      value: 'โรคมะเร็งลำไส้' 
    },
    {
      id: 5,
      label: 'โรคริดสีดวงทวาร',
      value: 'โรคริดสีดวงทวาร'  
    },
    {
      id: 6,
      label: 'โรคหัวใจและหลอดเลือด',
      value: 'โรคหัวใจและหลอดเลือด'  
    },
    {
      id: 7,
      label: 'โรคลำไส้อุดตัน',
      value: 'โรคลำไส้อุดตัน'  
    },
    {
      id: 8,
      label: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง',
      value: 'โรคกล้ามเนื้อเชิงอุ้งกรานอ่อนเเรง'  
    },
    {
      id: 9,
      label: 'โรคเบาหวาน',
      value: 'โรคเบาหวาน'  
    },
    {
      id: 10,
      label: 'โรคความดันตํ่า',
      value: 'โรคความดันตํ่า'  
    },
    {
      id: 11,
      label: 'โรคไขมันในเลือด',
      value: 'โรคไขมันในเลือด'  
    },
    {
      id: 12,
      label: 'โรคกระเพาะ/กรดไหลย้อน',
      value: 'โรคกระเพาะ/กรดไหลย้อน'  
    },
  ];

  const handleChange = (value) => {
    console.log('Choice Selected:11', value);
    // เรียกใช้ฟังก์ชัน handleNextQuestion และส่งค่า value ไปด้วย
    handleNextQuestion(value);
  };
  
  const handleNextQuestion = (value) => {
    // ในฟังก์ชันนี้คุณสามารถใช้ค่า value ที่ส่งมาได้
    console.log('Answer:11', value);
    // ทำสิ่งที่ต้องการต่อไป...
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
