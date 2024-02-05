import { Card, Select, Modal } from 'antd';
import React, { useState } from 'react';
import './Menu.css';
import { menus } from './list15'; //meun 15.00


const { Option } = Select;

const Menu15 = () => {
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
          <p className='text-time'> 15:00 </p>
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

export default Menu15;