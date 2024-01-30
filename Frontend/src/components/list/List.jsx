import { Select, Space } from 'antd';
import React from 'react';

const options = [
  {
    label: 'โรคความดันโลหิต',
    value: '1', 
  },
  {
    label: 'โรคท้องผูก',
    value: '2', 
  },
  {
    label: 'โรคมะเร็งลำไส้',
    value: '3', 
  },
  {
    label: 'โรคริดสีดวงทวาร',
    value: '4', 
  },
  {
    label: 'โรคหัวใจและหลอดเลือด',
    value: '5', 
  },
  {
    label: 'โรคลำไส้อุดตัน',
    value: '6', 
  }
  ,
  {
    label: 'โรคกล้ามเนื้ออุ้งเชิงกรานอ่อนแรง',
    value: '7', 
  }
  ,
  {
    label: 'โรคเบาหวาน',
    value: '8', 
  }
  ,
  {
    label: 'โรคความดัน',
    value: '9', 
  }
  ,
  {
    label: 'โรคไขมันในเลือด',
    value: '10', 
  }
  ,
  {
    label: 'โรคกระเพาะ/กรดไหลย้อน',
    value: '11', 
  }
  ,
  {
    label: 'อื่นๆ',
    value: '12', 
  }
  ,
  {
    label: 'ไม่มีโรคประจำตัว',
    value: '13', 
  }
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const List = () => (

  <Space style={{ width: '100%' }} direction="vertical">
    <Select
      mode="multiple"
      allowClear
      style={{ width: '30%' }}
      placeholder="กรุณาเลือก A"
      defaultValue={['โรคความดันโลหิต']}
      onChange={handleChange}
      optionLabelProp='label'
      options={options}
    />
  </Space>

);

export default List;
