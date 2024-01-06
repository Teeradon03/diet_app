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
          value: 'โลว์คาร์บหรือคีโต'
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
          value: 'มังสวิรัติ'
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
          value: 'วีแกน'
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
          value: 'ไม่มีแลคโตส'
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
          value: 'ไม่มีกลูเตน'
      },{
        label: (
          <span>
            อาหารเพสคาทาเรียน
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานเนื้อสัตว์ แต่รับประทานปลาหรือหอย)
                </span>
          </span>),
          value: 'อาหารเพสคาทาเรียน'
      },{
        label: (
          <span>
            พาเลโอไดเอท
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ทานอาหารแบบคาร์โบไฮเดรตตํ๋า ไม่ทานขนมหวาน)
                </span>
          </span>),
          value: 'พาเลโอไดเอท'
      },{
        label: (
          <span>
            ไม่มีไข่
            <br />
            <span style={{ fontSize: 'smaller' }}>
                (ไม่รับประทานอาหารที่มีไข่ หรือส่วนประกอบของไข่)
                </span>
          </span>),
          value: 'ไม่มีไข่'
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
          value: 'ไม่รับประทานอาหารทะเล'
      },
      {
        label: (
          <span>
            รับประทานอาหารได้แทบทุกชนิด
            <br />
            <span style={{ fontSize: 'smaller' }}>
                
                </span>
          </span>),
          value: 'รับประทานอาหารได้แทบทุกชนิด'
      },
  ];

  const handleChange = (value) => {
    console.log('Choice Selected:10', value);
    // เรียกใช้ฟังก์ชัน handleNextQuestion และส่งค่า value ไปด้วย
    handleNextQuestion(value);
  };
  
  const handleNextQuestion = (value) => {
    // ในฟังก์ชันนี้คุณสามารถใช้ค่า value ที่ส่งมาได้
    console.log('Answer:10', value);
    // ทำสิ่งที่ต้องการต่อไป...
  };
  
  const Choice2 = () => (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="กรุณาเลือกคำตอบต่อไปนี้ "
      onChange={handleChange}
      optionLabelProp="label"
      options={options}    
    />
  );
<<<<<<< HEAD

export default Choice2;
=======
  
  export default Choice2;
  
>>>>>>> 397a097450a71faad5f5edfc30e9423cea6e3e45
