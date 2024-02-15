import styles from './Ever.module.css';
import GoBack from '../goBack/GoBack';
import React, { useState } from 'react';

export default function Ever() {
  const [selectedOption, setSelectedOption] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setButtonColor(getRandomColor()); // เมื่อเลือกตัวเลือกใหม่ให้เรียกฟังก์ชันเพื่อสร้างสีสุ่ม
  };

  const handleNext = () => {
    if (selectedOption === 'มีรหัสลูกค้า') {
      window.location.href = '/customerkey';
    }
  };

  return (
    <div className="container text-center pt-3 col-sm-10 col-lg-8 col-md-8 col-xl-6">
      <GoBack />
      <div className="row justify-content-center mt-5">
        <div className="answer mt-5 ">
          <h1 style={{ margin: '10px', fontWeight: 900 }}>รหัสลูกค้า</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="mt-5 col-8">
          <button
            className={`${styles.everButton} ${selectedOption === 'มีรหัสลูกค้า' ? styles.highlightever : ''}`}
            style={{ backgroundColor: selectedOption === 'มีรหัสลูกค้า' ? buttonColor : '' }}
            onClick={() => handleOptionSelect('มีรหัสลูกค้า')}
          >
            มีรหัสลูกค้า
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="mb-5 col-8">
          <button
            className={`${styles.everButton} ${selectedOption === 'ไม่มีรหัสลูกค้า' ? styles.highlightever : ''}`}
            style={{ backgroundColor: selectedOption === 'ไม่มีรหัสลูกค้า' ? buttonColor : '' }}
            onClick={() => handleOptionSelect('ไม่มีรหัสลูกค้า')}
          >
            ไม่มีรหัสลูกค้า
          </button>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="mt-5 col-sm-8 col-8">
          <button className={styles.everNext} onClick={handleNext}>
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
}
