import React, { useState } from "react";
import "./Yesno.css";
import { VscChevronLeft } from "react-icons/vsc";
import axios from "axios";


const yesno = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const images = ['/img/yn1.jpg', '/img/yn2.jpg', '/img/yn3.jpg',
  '/img/yn4.jpg', '/img/yn5.jpg', '/img/yn6.jpg',
  '/img/yn7.jpg', '/img/yn8.jpg', '/img/yn9.jpg',
  '/img/yn10.jpg', '/img/yn11.jpg', '/img/yn12.jpg',
  '/img/yn13.jpg', '/img/yn14.jpg', '/img/yn15.jpg',
  '/img/yn16.jpg', '/img/yn17.jpg', '/img/yn18.jpg',
  '/img/yn19.jpg', '/img/yn20.jpg', '/img/yn21.jpg',
  '/img/beer.jpg', '/img/yn23.jpg', '/img/tod.jpg',
  '/img/yn25.jpg', '/img/yn26.jpg', '/img/kan.jpg',
  '/img/leg.jpg', '/img/back.jpg', '/img/born.jpg',]; // เพิ่ม URLs ของรูปภาพที่นี่

  const [questions] = useState([
                {
                id: 12,
                question: 'เป้าหมายที่คุณต้องการ ลดน้ำหนัก',
                },
                {
                id: 13,
                question: 'เป้าหมายที่คุณต้องการ ลดไขมัน',
                },
                {
                id: 14,
                question: 'เป้าหมายที่คุณต้องการ สุขภาพดี',
                },
                {
                id: 15,
                question: 'เป้าหมายที่คุณต้องการ เสริมสร้างกล้ามเนื้อ',
                },
                {
                id: 16,
                question: 'รูปร่างของคุณคือลักษณะ ผอมเพรียว',
                },
                {
                id: 17,
                question: 'รูปร่างของคุณคือลักษณะ สมส่วน',
                },
                {
                id: 18,
                question: 'รูปร่างของคุณคือลักษณะ อวบ',
                },
                {
                id: 19,
                question: 'รูปร่างของคุณคือลักษณะ อ้วน',
                },
                {
                id: 20,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ ก้น',
                },
                {
                id: 21,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ ต้นขา',
                },
                {
                id: 22,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ หน้าอก',
                },
                {
                id: 23,
                question: 'ในร่างกายของคุณที่ต้องการลดคือ หน้าท้อง',
                },
                {
                id: 24,
                question: 'พฤติกรรมของคุณในช่วงระหว่างวันคือ นั่งเกือบทั้งวัน',
                },
                {
                id: 25,
                question: 'พฤติกรรมของคุณในช่วงระหว่างวันคือ ยืนเกือบทั้งวัน',
                },
                {
                id: 26,
                question: 'พฤติกรรมของคุณในช่วงระหว่างวันคือ เดินเกือบทั้งวัน',
                },
                {
                id: 27,
                question: 'ลุกหรือเดินเพื่อยืดเส้นสายเกือบทั้งวัน',
                },
                {
                id: 28,
                question: 'คุณดื่มน้ำเปล่าวันละ 2-3 แก้ว/วัน',
                },
                {
                id: 29,
                question: 'คุณดื่มน้ำเปล่าวันละ 4-5 แก้ว/วัน',
                },
                {
                id: 30,
                question: 'คุณดื่มน้ำเปล่าวันละ 6-7 แก้ว/วัน',
                },
                {
                id: 31,
                question: 'คุณดื่มน้ำเปล่าวันละมากกว่า 8 แก้ว/วัน',
                },
                {
                id: 32,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบดื่มน้ำอัดลม',
                },
                {
                id: 33,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบดื่มเบียร์',
                },
                {
                id: 34,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบขนมหวาน',
                },
                {
                id: 35,
                question: 'นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบกินของทอด',
                },
                {
                id: 36,
                question: 'คุณมีประสบปัญหาปวดหลัง',
                },
                {
                id: 37,
                question: 'คุณมีประสบปัญหาปวดเข่า',
                },
                {
                id: 38,
                question: 'คุณมีประสบปัญหาปวดแขน',
                },
                {
                id: 39,
                question: 'คุณมีประสบปัญหาปวดขา',
                },
                {
                id: 40,
                question: 'คุณมีประสบปัญหาปวดเอว',
                },
                {
                id: 41,
                question: 'คุณมีประสบปัญหาปวดข้อกระดูก',
                },
            ]);


            const sendToAPI = async () => {
              try {
                const data = {
                  questionId: questions[currentQuestionIndex].id,
                  question: questions[currentQuestionIndex].question,
                  answer: 5,
                  userId: 1
                };
              
                const response = await axios.post('http://localhost:9999/api/create-questionnaires', data,{
                  withCredentials: true
                });
                
                console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
              } catch (error) {
                console.error('Error:', error);
              }
            };
            
            
  const handleYesClick = () => {
    const newIndex = currentImageIndex + 1;

    if (newIndex < images.length - 1) {
      setCurrentImageIndex(newIndex);
      setCurrentQuestionIndex(newIndex);
    } else {
      setCurrentImageIndex(images.length - 1);
      setCurrentQuestionIndex(images.length - 1);

      if (questions && questions[currentImageIndex] && questions[currentImageIndex].id === 30) {
        window.location.href = '/Calendar_1';
        return; // ทำการ return เพื่อป้องกันการทำงานต่อที่อาจเกิดขึ้นหลังการเปลี่ยนหน้า
      }
    }

    if (questions && questions[currentImageIndex] && questions[currentImageIndex].id) {
      console.log('Question ID:', questions[currentImageIndex].id);
      console.log('Yes:', newIndex);


      // เรียกใช้งานฟังก์ชันสำหรับส่งข้อมูลไปยัง API เมื่อตอบ "ใช่"
      sendToAPI();

    }
  };


  const handleNoClick = () => {
    const newIndex = currentImageIndex + 1;

    if (newIndex < images.length - 1) {
      setCurrentImageIndex(newIndex);
      setCurrentQuestionIndex(newIndex);
    } else {
      setCurrentImageIndex(images.length - 1);
      setCurrentQuestionIndex(images.length - 1);

      if (questions && questions[currentImageIndex] && questions[currentImageIndex].id === 30) {
        window.location.href = '/Calendar_1';
        return; // ทำการ return เพื่อป้องกันการทำงานต่อที่อาจเกิดขึ้นหลังการเปลี่ยนหน้า
      }
    }

    if (questions && questions[currentImageIndex] && questions[currentImageIndex].id) {
      console.log('Question ID:', questions[currentImageIndex].id);
      console.log('No:', newIndex);


      // เรียกใช้งานฟังก์ชันสำหรับส่งข้อมูลไปยัง API เมื่อตอบ "ใช่"
      sendToAPI();


    }
  };




  const handlePreviousClick = () => {
    // ตรวจสอบว่าเป็น ID 11 หรือไม่
    const targetQuestionId = 11; // ID ของคำถามที่ต้องการ

    if (currentQuestionIndex === 0) {
      // หากเป็นคำถามแรก ให้ไปยังหน้า Question โดยตรง
      window.location.href = 'Choice'; // อาจจะต้องเปลี่ยนหรือเพิ่ม path ตามโครงสร้างของเว็บไซต์
    } else {
      // หากไม่ใช่คำถามแรก ให้ย้อนกลับไปทีละขั้นตอน
      let newIndex = currentQuestionIndex - 1;

      // ตรวจสอบว่า newIndex เป็น ID ของคำถามที่ต้องการหรือไม่
      if (questions[newIndex].id === targetQuestionId) {
        // ถ้าเป็น ID ที่ต้องการ ให้ทำการ set currentIndex และอื่นๆ ตามต้องการ
        setCurrentQuestionIndex(newIndex);
        setCurrentImageIndex(newIndex);
        // อาจต้องเพิ่มการ set state ของ currentIndex และอื่นๆ ตามต้องการเพื่อให้แสดง ID 11 อย่างถูกต้อง
      } else {
        // หากไม่ใช่ ID ที่ต้องการ ให้ย้อนกลับไปขั้นตอนก่อนหน้านี้
        newIndex =
          currentQuestionIndex === 0
            ? questions.length - 1
            : currentQuestionIndex - 1;
        setCurrentImageIndex(newIndex);
        setCurrentQuestionIndex(newIndex);
        // อาจต้องเพิ่มการ set state ของ currentIndex และอื่นๆ ตามต้องการเพื่อให้ย้อนกลับไปแสดงคำถามก่อนหน้า
      }
    }
  };


  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

    return (
      <div className="Ynquiztion">
      <div className='font-family'> 
      <p className='question' style={buttonStyle}>{questions[currentQuestionIndex].question}</p>
        <img
          className="imgmedia"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ width: "500px", height: "500px" }}
        />
        <div className="button-container">
          <button
            className="no-button"
            style={buttonStyle}
            onClick={handleNoClick}
          >
            ไม่
          </button>
          <h1 className="and" style={{ ...buttonStyle, margin: "0 60px" }}>
            หรือ
          </h1>
          <button
            className="yes-button"
            style={buttonStyle}
            onClick={handleYesClick}
          >
            ใช่
          </button>
        </div>
        <div>
          <button
            className="chevron-icon"
            style={buttonStyle}
            onClick={handlePreviousClick}
          >
            <VscChevronLeft />
            {/* ไอคอนย้อนกลับ */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default yesno;