import React from "react";
import Card from "react-bootstrap/Card";
import { VscChevronLeft } from "react-icons/vsc";
import "./Nano.css";

function nanox2() {
  const cardData = [
    {
      imageUrl: "/public/product_img/nanox2.png",
    },
  ];

  const buttonStyle = {};

  const handlePreviousClick = () => {
    window.location.href = "/fate2/product";
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className="text-if">เครื่องดื่มเพื่อสุขภาพ</h1>
      <div className="image-box">
        {cardData.map((card, index) => (
          <Card className="card-box" key={index}>
            <Card.Img variant="top" src={card.imageUrl} />
          </Card>
        ))}
      </div>
      <div className="text">
        <br />
        <h2>NanoX2</h2>
        <h3>กาแฟปรุงสำเร็จชนิดผง nanoX2</h3>
        <br />
        <h4>
          กาแฟ nanoX2 ช่วยปรับสมดุลระบบขับถ่าย คุมหิวไม่ปวดบิด หวานน้อย
          แคลลอรี่ต่ำ รสชาติเข้มขน อร่อยกลมกล่อม
        </h4>
        <h4>ตัวช่วยของคนที่มีปัญหาเรื่องระบบขับถ่าย</h4>
        <br/><br/>
          <h4>- สารสกัดจากชาเขียว</h4>
          <h4>- สารสกัดจากผลส้มแขก</h4>
          <h4>- น้ำมันเอ็มซีทีชนิดผง</h4>
          <h4>- ใยอาหารจากข้าวสาลี</h4>
          <h4>- ไฟเบอร์ครีมจากน้ำมันมะพร้าว</h4>
          <br/><br/>
          <h3>วิธีรับประทาน</h3>
          <h4>- ฉีกซองกาแฟลงในถ้วยน้ำร้อน 120-150 มล. คนให้ละลาย</h4>
          <h4>- รับประทานวันละ 1 - 2 ซอง</h4>
          <h4>ขนาดบรรจุภัณฑ์ : 5 ซอง</h4>
          <h4>น้ำหนักสุทธิ : 15 กรัม</h4>
          <h4>เลขจดแจ้ง : 13-2-02660-6-0052</h4>
        </div>
        <br/><br/><br/>
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
}

export default nanox2;
