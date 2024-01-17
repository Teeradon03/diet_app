import React, { useState } from "react";
import "./Yesno.css";
import { VscChevronLeft } from "react-icons/vsc";
import axios from "axios";

const yesno = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const images = [
    "/img/17.jpg",//id12-img17
    "/img/18.jpg",//id13-img18
    "/img/19.jpg",//id14-img19
    "/img/20.jpg",//id15-img20
    "/img/21.jpg",//id16-img21
    "/img/22.jpg",//id17-img22
    "/img/23.jpg",//id18-img23
    "/img/24.jpg",//id19-img24
    "/img/25.jpg",//id20-img25
    "/img/26.jpg",//id21-img26
    "/img/27.jpg",//id22-img27
    "/img/28.jpg",//id23-img28
    "/img/29.jpg",//id24-img29
    "/img/30.jpg",//id25-img30
    "/img/31.jpg",//id26img31
    "/img/32.jpg",//id27img32
    "/img/33.jpg",//id28img33
    "/img/34.jpg",//id29img34
    "/img/35.jpg",//id30-img35
    "/img/36.jpg",//id31-img36
    "/img/37.jpg",//id32-img37
    "/img/38.jpg",//id33-img38
    "/img/39.jpg",//id34-img39
    "/img/40.jpg",//id35-img40
    "/img/41.jpg",//id36-img41
    "/img/42.jpg",//id37-img42
    "/img/43.jpg",//id38-img43
    "/img/44.jpg",//id39-img44
    "/img/45.jpg",//id40-img45
    "/img/46.jpg",//id41-img46
  ]; // เพิ่ม URLs ของรูปภาพที่นี่

  const [questions] = useState([
    {
      id: 12,
      question: "เป้าหมายที่คุณต้องการ ลดน้ำหนัก",
    },
    {
      id: 13,
      question: "เป้าหมายที่คุณต้องการ ลดไขมัน",
    },
    {
      id: 14,
      question: "เป้าหมายที่คุณต้องการ สุขภาพดี",
    },
    {
      id: 15,
      question: "เป้าหมายที่คุณต้องการ เสริมสร้างกล้ามเนื้อ",
    },
    {
      id: 16,
      question: "รูปร่างของคุณคือลักษณะ ผอมเพรียว",
    },
    {
      id: 17,
      question: "รูปร่างของคุณคือลักษณะ สมส่วน",
    },
    {
      id: 18,
      question: "รูปร่างของคุณคือลักษณะ อวบ",
    },
    {
      id: 19,
      question: "รูปร่างของคุณคือลักษณะ อ้วน",
    },
    {
      id: 20,
      question: "ในร่างกายของคุณที่ต้องการลดคือ ก้น",
    },
    {
      id: 21,
      question: "ในร่างกายของคุณที่ต้องการลดคือ ต้นขา",
    },
    {
      id: 22,
      question: "ในร่างกายของคุณที่ต้องการลดคือ ต้นแขน",
    },
    {
      id: 23,
      question: "ในร่างกายของคุณที่ต้องการลดคือ หน้าท้อง",
    },
    {
      id: 24,
      question: "พฤติกรรมของคุณในช่วงระหว่างวันคือ นั่งเกือบทั้งวัน",
    },
    {
      id: 25,
      question: "พฤติกรรมของคุณในช่วงระหว่างวันคือ ยืนเกือบทั้งวัน",
    },
    {
      id: 26,
      question: "พฤติกรรมของคุณในช่วงระหว่างวันคือ เดินเกือบทั้งวัน",
    },
    {
      id: 27,
      question: "ลุกหรือเดินเพื่อยืดเส้นสายเกือบทั้งวัน",
    },
    {
      id: 28,
      question: "คุณดื่มน้ำเปล่าวันละ 2-3 แก้ว/วัน",
    },
    {
      id: 29,
      question: "คุณดื่มน้ำเปล่าวันละ 4-5 แก้ว/วัน",
    },
    {
      id: 30,
      question: "คุณดื่มน้ำเปล่าวันละ 6-7 แก้ว/วัน",
    },
    {
      id: 31,
      question: "คุณดื่มน้ำเปล่าวันละมากกว่า 8 แก้ว/วัน",
    },
    {
      id: 32,
      question: "นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบดื่มน้ำอัดลม",
    },
    {
      id: 33,
      question: "นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบดื่มเบียร์",
    },
    {
      id: 34,
      question: "นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบขนมหวาน",
    },
    {
      id: 35,
      question: "นิสัยแย่ๆของคุณที่ชอบทำ คือ ชอบกินของทอด",
    },
    {
      id: 36,
      question: "คุณมีประสบปัญหาปวดหลัง",
    },
    {
      id: 37,
      question: "คุณมีประสบปัญหาปวดเข่า",
    },
    {
      id: 38,
      question: "คุณมีประสบปัญหาปวดแขน",
    },
    {
      id: 39,
      question: "คุณมีประสบปัญหาปวดขา",
    },
    {
      id: 40,
      question: "คุณมีประสบปัญหาปวดเอว",
    },
    {
      id: 41,
      question: "คุณมีประสบปัญหาปวดข้อกระดูก",
    },
  ]);

  const sendToAPI = async (answer) => {
    try {
      const data = {
        questionId: questions[currentQuestionIndex].id,
        question: questions[currentQuestionIndex].question,
        answer: answer
      };

      const response = await axios.post(
        "http://localhost:9999/api/form/create-questionnaires",
        data,
        {
          withCredentials: true,
        }
      );

      console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleYesClick = () => {
    const newIndex = currentImageIndex + 1;
    const answer = 1; // Yes เป็น 1

    updateIndicesAndSendToAPI(newIndex, answer);
  };

  const handleNoClick = () => {
    const newIndex = currentImageIndex + 1;
    const answer = 0; // No เป็น 0

    updateIndicesAndSendToAPI(newIndex, answer);
  };

  const updateIndicesAndSendToAPI = (newIndex, answer) => {
    if (newIndex < images.length - 1) {
      setCurrentImageIndex(newIndex);
      setCurrentQuestionIndex(newIndex);
    } else {
      setCurrentImageIndex(images.length - 1);
      setCurrentQuestionIndex(images.length - 1);

      if (
        questions &&
        questions[currentImageIndex] &&
        questions[currentImageIndex].id === 41
      ) {
        console.log('fdgfdgdfg',questions[currentImageIndex].id === 30)
        window.location.href = "/Calendar_1";
        return;
      }
    }

    if (
      questions &&
      questions[currentImageIndex] &&
      questions[currentImageIndex].id
    ) {
      console.log("Question ID:", questions[currentImageIndex].id);
      console.log("Answer:", answer);

      // เรียกใช้งานฟังก์ชันสำหรับส่งข้อมูลไปยัง API
      sendToAPI(answer);
    }
  };

  const handlePreviousClick = () => {
    // ตรวจสอบว่าเป็น ID 11 หรือไม่
    const targetQuestionId = 30; // ID ของคำถามที่ต้องการ

    if (currentQuestionIndex === 0) {
      // หากเป็นคำถามแรก ให้ไปยังหน้า Question โดยตรง
      window.location.href = "Choice"; // อาจจะต้องเปลี่ยนหรือเพิ่ม path ตามโครงสร้างของเว็บไซต์
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
  const imageStyle = {
    width: 450,
    height: 450
  }

  return (
    <div className="Ynquiztion">
      <div className="font-family">
        <p className="questionyesno">
          {questions[currentQuestionIndex].question}
        </p>
        <img
          className="imgmedia"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={imageStyle}
        />
      </div>

      <div className="button-container">
        <button
          className="no-button"
          style={buttonStyle}
          onClick={handleNoClick}
        >
          ไม่
        </button>
        <h1 className="and" ><br/> &nbsp;
          หรือ
        </h1> &nbsp;
        <button
          className="yes-button"
          style={buttonStyle}
          onClick={handleYesClick}
        >
          ใช่
        </button>
      </div>
      <button
        className="chevron-icon"
        style={buttonStyle}
        onClick={handlePreviousClick}
      >
        <VscChevronLeft />
        {/* ไอคอนย้อนกลับ */}
      </button>
    </div>
  );
};

export default yesno;