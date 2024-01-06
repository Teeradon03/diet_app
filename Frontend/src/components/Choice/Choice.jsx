import {Select} from 'antd';
import React from 'react';


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
