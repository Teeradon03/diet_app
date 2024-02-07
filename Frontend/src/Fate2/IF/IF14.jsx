import { Card, Select, Modal } from 'antd';
import React, { useState } from 'react';
import './IF08.css';
import { menus } from './Menu14'; //meun 14.00



const { Option } = Select;
const IF14 = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleMenuChange = (value) => {
    const selectedMenuObject = menus.find((menu) => menu.question === value);
    setSelectedMenu(value);
    setSelectedOptions(selectedMenuObject ? selectedMenuObject.options : []);

    // Calculate total calories when the menu changes
    const menuCalories = selectedMenuObject
      ? selectedMenuObject.options.reduce((acc, option) => {
          return acc + (option.Cal ? parseInt(option.Cal) : 0);
        }, 0)
      : 0;

    setTotalCalories(menuCalories);
  };

  const handleSave = () => {
    // Implement handleSave function
    // For example, you can make an API call or update your state here
    setIsDataSaved(true);
    showModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsDataSaved(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`font-family container`}>
      <p className='text-IF'> การลดน้ำหนัก IF </p>
      <p className='text-IF'> วันที่ 1 </p>

      <div className='row1'>
        <Card className='time'>
          <p className='text-time'> เวลา </p>
        </Card>

        <Card className='time-08'>
          <p className='text-time'> 14:00 </p>
        </Card>
      </div>

      <div className='row2'>
        <Card className='menu'>
          <p className='text-menu'> เมนูอาหาร </p>
        </Card>

        <Card className='raw-material '>
        <Select
          className='material '
          placeholder="เลือกวัตถุดิบ"
          onChange={handleMenuChange}
          optionLabelProp="label"
          size='large'
        >
          {menus.map(menu => (
            <Select.Option key={menu.id} style={{ fontSize: "22px" }} value={menu.question}>{menu.question}</Select.Option>
          ))}
        </Select>
        </Card>
      </div>

      <div className='contener-item'>
        <Card className='menu-item'>
          <p className='text-item'>{selectedMenu}</p>
          {selectedOptions.map((option, index) => (
            <li className='text-menu-item' key={index}>{option.label}</li>
          ))}
        </Card>
      </div>

      <div className='row3'>
      <Card className='Cal'>
        <p className='text-Cal'> แคลอรี่รวม </p>
      </Card>
      <Card className='KG-Cal'>
      <p className='text-Cal'> {totalCalories} กิโลแคลอรี่ </p>
      </Card>

      </div>
      <div className='contener-button'>
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

export default IF14;