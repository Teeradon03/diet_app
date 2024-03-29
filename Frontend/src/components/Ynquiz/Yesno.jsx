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
      question: "อยากลดน้ำหนัก",
    },
    {
      id: 13,
      question: "อยากลดไขมัน",
    },
    {
      id: 14,
      question: "อยากสุขภาพดี",
    },
    {
      id: 15,
      question: "อยากเสริมสร้างกล้ามเนื้อ",
    },
    {
      id: 16,
      question: "คุณผอมเพรียว ใช่ไหม?",
    },
    {
      id: 17,
      question: "คุณสมส่วน ใช่ไหม?",
    },
    {
      id: 18,
      question: "คุณอวบ ใช่ไหม?",
    },
    {
      id: 19,
      question: "คุณอ้วน ใช่ไหม?",
    },
    {
      id: 20,
      question: "ต้องการลด ก้น ใช่ไหม?",
    },
    {
      id: 21,
      question: "ต้องการลด ต้นขา ใช่ไหม?",
    },
    {
      id: 22,
      question: "ต้องการลด ต้นแขน ใช่ไหม?",
    },
    {
      id: 23,
      question: "ต้องการลด หน้าท้อง ใช่ไหม?",
    },
    {
      id: 24,
      question: "คุณต้องนั่งเกือบทั้งวัน?",
    },
    {
      id: 25,
      question: "คุณต้องยืนเกือบทั้งวัน?",
    },
    {
      id: 26,
      question: "คุณต้องเดินเกือบทั้งวัน?",
    },
    {
      id: 27,
      question: "คุณต้องลุกหรือเดินเพื่อยืดเส้น ยืดสายบ้าง?",
    },
    {
      id: 28,
      question: "ดื่มน้ำเปล่าวันละ 2 - 3 แก้ว ใช่หรือไม่?",
    },
    {
      id: 29,
      question: "ดื่มน้ำเปล่าวันละ 4 - 5 แก้ว ใช่หรือไม่?",
    },
    {
      id: 30,
      question: "ดื่มน้ำเปล่าวันละ 6 - 7 แก้ว ใช่หรือไม่?",
    },
    {
      id: 31,
      question: "ดื่มน้ำเปล่าวันละ 8 แก้ว ใช่หรือไม่?",
    },
    {
      id: 32,
      question: "คุณชอบดื่มน้ำอัดลม?",
    },
    {
      id: 33,
      question: "คุณชอบดื่มเบียร์?",
    },
    {
      id: 34,
      question: "คุณชอบขนมหวาน?",
    },
    {
      id: 35,
      question: "คุณชอบกินของทอด?",
    },
    {
      id: 36,
      question: "คุณปวดหลัง?",
    },
    {
      id: 37,
      question: "คุณปวดเข่า?",
    },
    {
      id: 38,
      question: "คุณปวดแขน?",
    },
    {
      id: 39,
      question: "คุณปวดขา?",
    },
    {
      id: 40,
      question: "คุณปวดเอว?",
    },
    {
      id: 41,
      question: "คุณปวดข้อกระดูก?",
    },
  ]);

  const sendToAPI = async (answer) => {
    try {
      const data = {
        questionId: questions[currentQuestionIndex].id,

        answer: answer
      };

      // console.log('data in before axios',data)

      const response = await axios.post(
        `${import.meta.env.VITE_URL_API}/api/form/create-questionnaires`,
        data,
        {
          withCredentials: true,
        }
      );

      // console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [yesButtonColor, setYesButtonColor] = useState('#ffffff');
  const [noButtonColor, setNoButtonColor] = useState('#ffffff');


  const handleYesClick = () => {
    const newIndex = currentImageIndex + 1;
    const answer = 1; // Yes เป็น 1

    updateIndicesAndSendToAPI(newIndex, answer);
    setYesButtonColor(getRandomColor()); // เรียกฟังก์ชันเพื่อสร้างสีสุ่ม
    setNoButtonColor('#ffffff'); // กำหนดให้สีของปุ่ม No เป็นสีขาว
  };

  const handleNoClick = () => {
    const newIndex = currentImageIndex + 1;
    const answer = 0; // No เป็น 0

    updateIndicesAndSendToAPI(newIndex, answer);
    setNoButtonColor(getRandomColor()); // เรียกฟังก์ชันเพื่อสร้างสีสุ่ม
    setYesButtonColor('#ffffff'); // กำหนดให้สีของปุ่ม Yes เป็นสีขาว
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
        // console.log('fdgfdgdfg',questions[currentImageIndex].id === 41)
        // console.log('answer', questions[currentImageIndex].id)
        sendToAPI(answer);
        window.location.href = "/Calendar_1";
        return;
      }
    }

    if (
      questions &&
      questions[currentImageIndex] &&
      questions[currentImageIndex].id
    ) {
      // console.log("Question ID:", questions[currentImageIndex].id);
      // console.log("Answer:", answer);

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
    width: 400,
    height: 400
  }




  return (
    <div className="Ynquiztion">
      <div className="font-family">
        <br />
        <p className="questionyesno">
          {questions[currentQuestionIndex].question}
        </p>
        <br />
        <img
          className="imgmedia"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        //style={imageStyle}
        />
      </div>
      <br />
      <div className="button-container">
      <button
          className="no-button"
          style={{ ...buttonStyle, backgroundColor: noButtonColor }}
          onClick={handleNoClick}
        >
          ไม่
        </button>
        <h1 className="and" ><br />
          &nbsp; หรือ &nbsp;
        </h1>
        <button
          className="yes-button"
          style={{ ...buttonStyle, backgroundColor: yesButtonColor }}
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