import {Select} from 'antd';
import React from 'react';


const options  = [
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
      },{
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

const handleChange = () => {
  console.log('selected ${value}');
};

const Choice2 = () => (
    <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="กรุณาเลือกคำตอบต่อไปนี้"

    onChange={handleChange}
    optionLabelProp="label"
    options={options}    
  />
);

export default Choice2;