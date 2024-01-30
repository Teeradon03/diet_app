import React from "react";
import Card from "react-bootstrap/Card";
import { VscChevronLeft } from "react-icons/vsc";
import "./Nano.css";

function nanova() {
  const cardData = [
    {
      imageUrl: "/public/product_img/nanoVa.png",
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
      <div>
        <br />
        <h2>nanoVA</h2>
        <h3>กาแฟปรุงสำเร็จชนิดผง nanoVA</h3>
        <br />
        <h4>กาแฟปรุงสําเร็จชนิดผง </h4>
        <h4>nanoVAส่งต่อความสวยและเริ่มต้นหุ่นใหม่กับกาแฟนาโนวา  หอม กลมกล่อม เข้มข้น</h4>
        <h4>เมล็ดกาแฟอาราบิก้าแท้จากประเทศมาเลเซีย ให้คุณสัมผัสรสชาติเข้ม เต็มรสกาแฟ และกลิ่นหอมกรุ่น ด้วยรสชาดกาแฟแท้…</h4>
        <h4>1 ซองพลังงานแค่ 70 กิโลแคลอรี</h4>
        <h4>❌0% คอเลสเตอรอล</h4>
        <h4>❌0% ไขมันทรานส์</h4>
        <h4>อาใจทั้งคอกาแฟและคอลลาเจนผสมรวมในแก้วเดียวรสชาติกลมกล่อมและเข้มข้นด้วยกาแฟสายพันธุ์อราบิก้ามีส่วนประกอบของคอลลาเจนแแต่ไม่ทำให้เสียรสชาติ</h4>
        <h4>- เหมาะกับผู้ที่ชอบดื่มกาแฟเป็นประจำ</h4>
        <h4>- รสชาติกลมกล่อม</h4>
        <h4>- ผิวลื่น อ่อนวัยสุขภาพดีจากคอลลาเจน</h4>
        <h4>- มีไฟเบอร์สูงช่วยในการขับถ่าย</h4>
        <h4>- เร่งระบบเผาผลาญไขมัน คุมหิว อิ่มนาน</h4>
        <br/>
        <h2>วิธีรับประทาน</h2>
        <h4>- ดื่มร้อน : ฉีกกาแฟ 1 ซอง เทลงในถ้วย เติมน้ำร้อน 100มล. คนให้เข้ากัน</h4>
        <h4>- ดื่มเย็น : ฉีกกาแฟ 1 ซอง เทลงในถ้วย เติมน้ำร้อน 100มล. เติมน้ำแข็งคนให้เข้ากัน</h4>
        <h4>เลขที่จดแจ้ง 13-2-02660-2-0091</h4>
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

export default nanova;
