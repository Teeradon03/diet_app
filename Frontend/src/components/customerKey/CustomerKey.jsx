import React, { useState } from "react";
import axios from "axios";
import { VscChevronLeft } from "react-icons/vsc";
import styles from "./CustomerKey.module.css";

export default function CustomerKey() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePreviousClick = () => {
    window.location.href = '/ever';
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log(message);
    console.log(message.length);

    if (message.length > 0) {
      try {
        const response = await axios.post('http://localhost:9999/api/cusKey', { message });
        console.log(response);

        if (response.data) {
          console.log('Customer key submitted successfully!');
        } else {
          console.error('Error submitting customer key:', response.data.error);
        }
      } catch (error) {
        console.error('Error sending data to backend:', error.message);
      }
    } else {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
    }

    setIsLoading(false);
  };

  return (
    <div className="container text-center pt-3 col-sm-10 col-lg-8 col-md-8 col-xl-6">
      <div className="col-2">
        <button
          className="chevron-icon"
          onClick={handlePreviousClick}
        >
          <VscChevronLeft />
          {/* ไอคอนย้อนกลับ */}
        </button>
      </div>
      <div className="row justify-content-center mt-5">
        <div className=" col-12">
          <h2 className="name text-center" style={{ fontWeight: 900 }}> 
            กรอกรหัสลูกค้า
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 text-start mt-4">
            <div className="mb-3">
              <label htmlFor="key" className="form-label">โปรดระบุรหัสที่ถูกต้อง</label>
              <input type="text" className="form-control" id="key" aria-describedby="helpId" placeholder="nanoX12345" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center fixed-bottom mb-5 pb-5">
          <div className="col-12 mb-5">
            <button
              type='button'
              className={styles.btn}
              style={{ fontWeight: 900 }}
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'ดำเนินการต่อ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
