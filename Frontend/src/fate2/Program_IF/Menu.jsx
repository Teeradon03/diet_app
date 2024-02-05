import { Card, Select, Modal } from 'antd';
import React, { useState } from 'react';
import './Menu.css';



const menus = [
  {
    id: 1,
    question: ' แซนวิชอกไก่ย่างโฮลวีต',
    options: [
      { label: '๐ ขนมปังโฮลวีท 1 แผ่น ' },
      { label: '๐ อกไก่ย่าง 100 กรัม ' },
      { Cal: '226' },
      { Image: "/10.jpg"}
    ]
  },
  {
    id: 2,
    question: ' ไข่ดาวห่ออกไก่สับผัดใบกุยช่าย',
    options: [
      { label: '๐ ไข่ดาว 2 ฟอง' },
      { label: '๐ อกไก่สับ 100 กรัม' },
      { label: '๐ น้ำมันพืช 1 ช้อนโต๊ะ' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { label: '๐ พริกไทยดำ 1/4 ช้อนชา' },
      { Cal: '250' },
    ]
  },
  {
    id: 3,
    question: ' เกี๊ยวน้ำ 1 ชาม',
    options: [
      { label: '๐ แผ่นเกี๊ยว 20 แผ่น' },
      { label: '๐ หมูสับ 100 กรัม' },
      { label: '๐ กุ้งสับ 50 กรัม' },
      { label: '๐ ต้นหอมซอย 1 ต้น' },
      { label: '๐ กระเทียมสับ 1 กลีบ' },
      { label: '๐ รากผักชีสับ 1 ราก' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { label: '๐ พริกไทยดำ 1/4 ช้อนชา' },
      { label: '๐ น้ำมันงา 1 ช้อนโต๊ะ' },
      { label: '๐ น้ำซุปกระดูกหมู 1 ลิตร' },
      { Cal: '400-500' },
    ]
  },
  {
    id: 4,
    question: ' โจ๊กอกไก่ไข่ขาว  1 ถ้วย ',
    options: [
      { label: '๐ อกไก่ 100 กรัม' },
      { label: '๐ ไข่ขาว 1 ถ้วย' },
      { label: '๐ น้ำเปล่า 1 ถ้วย' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { Cal: '153' },
    ]
  },
  {
    id: 5,
    question: ' โยเกิร์ตปั่นกับผลไม้ 1 แก้ว ',
    options: [
      { label: '๐ โยเกิร์ตธรรมชาติ 1 ถ้วย' },
      { label: '๐ ผลไม้สดตามชอบ เช่น กล้วย สตรอว์เบอร์รี บลูเบอร์รี มะม่วง มะละกอ' },
      { label: '๐ น้ำผึ้งหรือน้ำตาลทรายแดง (ใส่หรือไม่ใส่ก็ได้)' },
      { Cal: '200-300' },
    ]
  },
  {
    id: 6,
    question: ' สลัดผัก 1 จาน',
    options: [
      { label: '๐ ผักสลัดตามชอบ เช่น ผักกาดหอม ผักกาดแก้ว แตงกวา แครอท มะเขือเทศ' },
      { label: '๐ น้ำสลัดสูตรคลีน' },
      { Cal: '100-200' },
    ]
  },
  {
    id: 7,
    question: ' อกไก่ย่าง 100 กรัม ',
    options: [
      { label: '๐ อกไก่ 100 กรัม' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { label: '๐ พริกไทยดำ 1/4 ช้อนชา' },
      { label: '๐ น้ำมันพืช 1 ช้อนโต๊ะ' },
      { Cal: '167' },
    ]
  },
  {
    id: 8,
    question: ' โจ๊กข้าวกล้อง 1 ถ้วย ',
    options: [
      { label: '๐ ข้าวกล้อง 1 ถ้วย (น้ำหนักประมาณ 150 กรัม)' },
      { label: '๐ น้ำเปล่า 2 ถ้วย' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { Cal: '296' },
    ]
  },
  {
    id: 9,
    question: ' อกไก่สับ 100 กรัม',
    options: [
      { label: '๐ อกไก่ 200 กรัม' },
      { label: '๐ หอมใหญ่ 1/2 หัว' },
      { label: '๐ กระเทียม 3 กลีบ' },
      { label: '๐ รากผักชี 1 ต้น' },
      { label: '๐ พริกไทยดำ 1/2 ช้อนชา' },
      { label: '๐ เกลือ 1/4 ช้อนชา' },
      { Cal: '166' },
    ]
  },
  {
    id: 10,
    question: ' ข้าวต้มปลา1 ชาม ',
    options: [
      { label: '๐ ข้าวสวย 2 ทัพพี' },
      { label: '๐ ปลากะพงแดงหั่นชิ้น 500 กรัม' },
      { label: '๐ เห็ดหอม 4 ดอก' },
      { label: '๐ ข่าหั่นแว่น 1 แง่ง' },
      { label: '๐ รากผักชี 2 ราก' },
      { label: '๐ ซีอิ๊วขาว 2 ช้อนโต๊ะ' },
      { label: '๐ พริกไทย 1 ช้อนโต๊ะ' },
      { label: '๐ ซุปกระดูกหมู 1 ลิตร' },
      { Cal: '220' },
    ]
  },
  {
    id: 11,
    question: '  แกงจืดเต้าหู้หมูสับ 1 ชาม',
    options: [
      { label: '๐ หมูสับ 200 กรัม' },
      { label: '๐ เต้าหู้ไข่ 1 หลอด' },
      { label: '๐ แครอท 1/2 หัว' },
      { label: '๐ ผักกาดขาว 1/2 หัว' },
      { label: '๐ น้ำเปล่า 1 ลิตร' },
      { label: '๐ คนอร์ก้อนซุปหมู 1 ก้อน' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { label: '๐ พริกไทย 1/4 ช้อนชา' },
      { Cal: '320' },
    ]
  },
  {
    id: 12,
    question: ' ต้มยำกุ้งน้ำใส 1 ชาม ',
    options: [
      { label: '๐ กุ้งกุลาดำ 500 กรัม' },
      { label: '๐ เห็ดฟาง 200 กรัม' },
      { label: '๐ ข่า 1 แง่ง' },
      { label: '๐ ตะไคร้ 2 ต้น' },
      { label: '๐ ใบมะกรูด 3 ใบ' },
      { label: '๐ น้ำปลา 3 ช้อนโต๊ะ' },
      { label: '๐ น้ำมะนาว 2 ช้อนโต๊ะ' },
      { label: '๐ พริกขี้หนูสวน 10 เม็ด' },
      { Cal: '270' },
    ]
  },
  {
    id: 13,
    question: '  แกงเลียงกุ้งสด 1 ชาม',
    options: [
      { label: '๐ กุ้งสด 500 กรัม' },
      { label: '๐ ฟักทอง 1/2 หัว' },
      { label: '๐ บวบ 1/2 หัว' },
      { label: '๐ ข้าวโพดอ่อน 1/2 ฝัก' },
      { label: '๐ ใบแมงลัก 1 ถ้วย' },
      { label: '๐ พริกแกงเลียง 2 ช้อนโต๊ะ' },
      { label: '๐ น้ำเปล่า 1 ลิตร' },
      { label: '๐ น้ำปลา 2 ช้อนโต๊ะ' },
      { label: '๐ น้ำตาลทราย 1 ช้อนโต๊ะ' },
      { label: '๐ เกลือ 1/2 ช้อนชา' },
      { Cal: '250' },
    ]
  },
  {
    id: 14,
    question: '  เต้าหู้ขาวผัดคื่นช่าย1 จาน',
    options: [
      { label: '๐ เต้าหู้ขาว 1 ก้อน' },
      { label: '๐ คื่นช่าย 1 ต้น' },
      { label: '๐ กระเทียมสับ 1 ช้อนโต๊ะ' },
      { label: '๐ น้ำมันพืช 1 ช้อนโต๊ะ' },
      { label: '๐ ซีอิ๊วขาว 1 ช้อนโต๊ะ' },
      { label: '๐ ซอสหอยนางรม 1 ช้อนโต๊ะ' },
      { label: '๐ น้ำตาลทราย 1 ช้อนชา' },
      { Cal: '250' },
    ]
  },
  {
    id: 15,
    question: '  ไข่เจียวอกไก่ 1 จาน',
    options: [
      { label: '๐ อกไก่สับ 100 กรัม' },
      { label: '๐ ไข่ไก่ 2 ฟอง' },
      { label: '๐ ผักต่างๆ เช่น แครอท เห็ด ต้นหอม เป็นต้น (ใส่หรือไม่ใส่ก็ได้)' },
      { label: '๐ น้ำมันพืช 1 ช้อนโต๊ะ' },
      { Cal: '250-300' },
    ]
  },
  {
    id: 16,
    question: ' ไข่ตุ๋น 1 ถ้วย',
    options: [
      { label: '๐ ไข่ไก่ 2 ฟอง' },
      { label: '๐ น้ำเปล่า 1 ถ้วย' },
      { label: '๐ เกลือ เล็กน้อย (ใส่หรือไม่ใส่ก็ได้)' },
      { label: '๐ ซอสปรุงรส เล็กน้อย (ใส่หรือไม่ใส่ก็ได้)' },
      { Cal: '120-130' },
    ]
  },
  {
    id: 17,
    question: ' ข้าวกล้องหุงกับผัก  1 จาน ',
    options: [
      { label: '๐ ข้าวกล้อง 1 ถ้วย' },
      { label: '๐ ผักต่างๆ เช่น แครอท เห็ด บร็อคโคลี เป็นต้น (ใส่หรือไม่ใส่ก็ได้)' },
      { label: '๐ น้ำเปล่า 2 ถ้วย' },
      { Cal: '300-400' },
    ]
  },
  {
    id: 18,
    question: '  ข้าวโอ๊ตต้มกับนมถั่วเหลือง 1 ถ้วย ',
    options: [
      { label: '๐ ข้าวโอ๊ต 1/2 ถ้วย' },
      { label: '๐ นมถั่วเหลือง 1 ถ้วย' },
      { label: '๐ ผลไม้สดหรือผลไม้แห้งตามชอบ (ใส่หรือไม่ใส่ก็ได้)' },
      { label: '๐ น้ำผึ้งหรือเมเปิ้ลไซรัป (ใส่หรือไม่ใส่ก็ได้)' },
      { Cal: '300' },
    ]
  },
  {
    id: 19,
    question: ' แพนเค้กโฮลวีต 1 แผ่น ',
    options: [
      { label: '๐ แป้งโฮลวีต 1 ถ้วย' },
      { label: '๐ ผงฟู 1 ช้อนชา' },
      { label: '๐ เกลือ 1/4 ช้อนชา' },
      { label: '๐ ไข่ไก่ 2 ฟอง' },
      { label: '๐ นมสด 1 ถ้วย' },
      { label: '๐ น้ำมันพืช 1 ช้อนโต๊ะ' },
      { Cal: '148' },
    ]
  },
  {
    id: 20,
    question: ' วาฟเฟิลโฮลวีต 1 ชิ้น ',
    options: [
      { label: '๐ แป้งโฮลวีต 140 กรัม' },
      { label: '๐ ผงฟู 1 ช้อนชา' },
      { label: '๐ เกลือ 1/4 ช้อนชา' },
      { label: '๐ ไข่ไก่ 1 ฟอง' },
      { label: '๐ นมอัลมอนด์ 180 มิลลิลิตร' },
      { label: '๐ น้ำผึ้ง 1 ½ ช้อนโต๊ะ' },
      { label: '๐ น้ำมันรำข้าว 1 ½ ช้อนโต๊ะ' },
      { label: '๐ กลิ่นวานิลลา ½ ช้อนชา' },
      { Cal: '240' },
    ]
  },
  {
    id: 21,
    question: ' ชีสเค้กไร้แป้ง 1 ชิ้น ',
    options: [
      { label: '๐ ครีมชีส 250 กรัม' },
      { label: '๐ น้ำตาลอิริทริทอล 100 กรัม' },
      { label: '๐ ไข่ไก่ 3 ฟอง' },
      { label: '๐ โยเกิร์ตรสธรรมชาติ 100 กรัม' },
      { label: '๐ น้ำมะนาว 1 ช้อนชา' },
      { label: '๐ กลิ่นวานิลลา 1 ช้อนชา' },
      { Cal: '300' },
    ]
  },
  {
    id: 22,
    question: ' มูสลี่ ',
    options: [
      { label: '๐ ข้าวโอ๊ต 100 กรัม' },
      { label: '๐ เมล็ดธัญพืช เช่น เมล็ดฟักทอง เมล็ดทานตะวัน เมล็ดแฟลกซ์ เป็นต้น (ใส่หรือไม่ใส่ก็ได้)' },
      { label: '๐ ถั่วเปลือกแข็ง เช่น อัลมอนด์ วอลนัท พิสตาชิโอ เป็นต้น (ใส่หรือไม่ใส่ก็ได้)' },
      { label: '๐ ผลไม้แห้ง เช่น ลูกเกด แครนเบอร์รี่ เป็นต้น (ใส่หรือไม่ใส่ก็ได้)' },
      { Cal: '340' },
    ]
  },
  {
    id: 23,
    question: 'สมูทตี้ผลไม้  1 แก้ว ',
    options: [
      { label: '๐ ข้าวโอ๊ต 100 กรัม' },
      { label: '๐ ผลไม้สด เช่น กล้วย สตรอว์เบอร์รี่ บลูเบอร์รี่ เป็นต้น (ตามความชอบ)' },
      { label: '๐ นมสด โยเกิร์ตรสธรรมชาติ หรือน้ำผลไม้ (ตามความชอบ)' },
      { label: '๐ น้ำผึ้งหรือเมเปิ้ลไซรัป (ใส่หรือไม่ใส่ก็ได้)' },
      { Cal: '200-300' },
    ]
  },
  {
    id: 24,
    question: ' น้ำเต้าหู้ปั่น 1 แก้ว ',
    options: [
      { label: '๐ น้ำเต้าหู้ 1 ถ้วย' },
      { label: '๐ ผลไม้สด เช่น กล้วย สตรอว์เบอร์รี่ บลูเบอร์รี่ เป็นต้น (ตามความชอบ)' },
      { label: '๐ น้ำผึ้งหรือเมเปิ้ลไซรัป (ใส่หรือไม่ใส่ก็ได้)' },
      { Cal: '150-200' },
    ]
  },
];


const { Option } = Select;
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);

  const handleMenuChange = (value) => {
    const selectedMenuObject = menus.find((menu) => menu.question === value);
    setSelectedMenu(value);
    setSelectedOptions(selectedMenuObject ? selectedMenuObject.options : []);
  };

  const handleSave = () => {
    // Implement handleSave function
    // For example, you can make an API call or update your state here
    setIsDataSaved(true);
    showModal();

    // Pass selected menu and options to parent component (Program_IF)
    setSelectedMenu(selectedMenu);
    setSelectedOptions(selectedOptions);
    handleDataSave({ selectedMenu, selectedOptions });///เพิ่ม

  };

  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsDataSaved(false);
   
    window.location.href = "/fate2/Program_IF";
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='font-family'>
      <p className='text-IF'> การลดน้ำหนัก IF </p>
      <p className='text-IF'> วันที่ 1 </p>

      <div className='row1'>
        <Card className='time'>
          <p className='text-time'> เวลา </p>
        </Card>

        <Card className='time-08'>
          <p className='text-time'> 08:00 </p>
        </Card>
      </div>

      <div className='row2'>
        <Card className='menu'>
          <p className='text-menu'> เมนูอาหาร </p>
        </Card>

        <Select
          className='raw-material'
          placeholder="เลือกวัตถุดิบ"
          onChange={handleMenuChange}
          optionLabelProp="label"
          size='large'
          style={{
            width: 490,
            height: 70,
          }}
        >
          {menus.map(menu => (
            <Select.Option key={menu.id} style={{ fontSize: "22px" }} value={menu.question}>{menu.question}</Select.Option>
          ))}
        </Select>
      </div>

      <div className='font-family'>
        <Card className='menu-item'>
          <p className='text-item'>{selectedMenu}</p>
          {selectedOptions.map((option, index) => (
            <div key={index} className='menu-item-container'>
              <li className='text-menu-item'>{option.label}</li>
              {option.Image && (
               <img src={option.Image} className='menu-item-image' style={{ height: '300px', width: '300px' }} />

              )}
            </div>
          ))}
        </Card>
      </div>

      <div className='contener-button'>
        <button className='IF-Edit'>
          ยกเลิกแก้ไข
        </button>
        <button className='IF-Save' onClick={handleSave}>
          บันทึกข้อมูล
        </button>
   
        {/* Conditionally render the success message */}
        {isDataSaved && (
          <Modal title="บันทึกข้อมูล" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>บันทึกข้อมูลเรียบร้อย</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Menu;