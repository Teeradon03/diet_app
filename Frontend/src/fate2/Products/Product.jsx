// นำเข้าโมดูลและคอมโพเนนต์ที่จำเป็น
import React from "react";
import Card from "react-bootstrap/Card"; // นำเข้าคอมโพเนนต์ Card จาก react-bootstrap
import "./Product.css"; // นำเข้าไฟล์ CSS เพื่อให้สามารถใส่สไตล์

// กำหนดคอมโพเนนต์ฟังก์ชันที่ชื่อ Product
function Product() {
  // อาร์เรย์ของอ็อบเจ็กต์ที่มีข้อมูลสำหรับแต่ละการ์ดสินค้า
  const cardData = [
    {
      title: "nanoX2",
      imageUrl: "/product_img/nanox2.png",
      link: "/fate2/Nanox2", // URL ที่จะนำไปเมื่อคลิกการ์ดที่ 1
    },
    {
      title: "nanoVA",
      imageUrl: "/product_img/nanoVa.png",
      link: "/fate2/Nanova", // URL ที่จะนำไปเมื่อคลิกการ์ดที่ 2
    },
  ];

  // ฟังก์ชันที่จะจัดการเหตุการณ์คลิกบนการ์ดโดยนำทางไปยังลิงก์ที่ระบุ
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  // แสดงคอมโพเนนต์
  return (
    <div>
      {/* เพิ่มการขึ้นบรรทัดและหัวเรื่องสำหรับส่วนสินค้า */}
      <br />
      <br />
      <br />
      <h1 className="text-pro">เครื่องดื่มเพื่อสุขภาพ</h1>
      <br />
      {/* แสดงการ์ดสินค้าในเครื่องหมายเหลี่ยมยืด */}
      <div className="image-box-pro">
        {cardData.map((card, index) => (
          // สร้างคอมโพเนนต์ Card สำหรับแต่ละสินค้าพร้อมกับ key และตัวจัดการเหตุการณ์คลิก
          <Card
            className="card-box-pro"
            key={index}
            onClick={() => handleCardClick(card.link)}
            style={{ cursor: "pointer", maxWidth: "500px",height:"300px" }}
          >
            {/* แสดงรูปภาพสินค้าภายในคอมโพเนนต์ Card */}
            <Card.Img
              variant="center"
              src={card.imageUrl}
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            {/* แสดงชื่อสินค้าภายในคอมโพเนนต์ Card */}
            <Card.Body>
              <Card.Title className="name-pro">{card.title}</Card.Title>
              {/* Card.Text หรือ Description ไม่ได้ถูกกำหนดไว้ใน cardData */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ส่งออกคอมโพเนนต์ Product เพื่อทำให้สามารถใช้งานได้ในส่วนอื่น ๆ ของแอปพลิเคชัน
export default Product;
