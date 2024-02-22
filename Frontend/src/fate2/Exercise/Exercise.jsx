import React from 'react';
import Card from 'react-bootstrap/Card';
import { VscChevronLeft } from "react-icons/vsc";
import './Exercise.css';

function Exercise() {
  const cardData = [
    {
      title: 'ออกกำลังกาย',
      imageUrl: '/public/10.jpg',
      link: 'https://www.youtube.com/@nanoverse2023', // URL ที่ต้องการนำไปหลังคลิกภาพที่ 1
    },
    {
        title: 'ออกกำลังกาย', 
        imageUrl: '/public/10.jpg',
        link: 'https://www.youtube.com/@nanoverse2023', // URL ที่ต้องการนำไปหลังคลิกภาพที่ 2
      },
      {
        title: 'ออกกำลังกาย',
        imageUrl: '/public/10.jpg',
        link: 'https://www.youtube.com/@nanoverse2023', // URL ที่ต้องการนำไปหลังคลิกภาพที่ 3
      },
      {
        title: 'ออกกำลังกาย',
        imageUrl: '/public/10.jpg',
        link: 'https://www.youtube.com/@nanoverse2023', // URL ที่ต้องการนำไปหลังคลิกภาพที่ 4
      },
  ];

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  const buttonStyle = {};

  const handlePreviousClick = () => {
    window.location.href = "/fate2/product";
  }

  return (
    <div>
      <br/><br/><br/>
      <h1 className='text-exer'>ออกกำลังกาย</h1> 
      <br/>
      <div className='image-box-ex'>
        {cardData.map((card, index) => (
          <Card
            className='card-box-ex'
            key={index}
            onClick={() => handleCardClick(card.link)}
            style={{ cursor: 'pointer' }}
          >
            <Card.Img className='img-ex' variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title className=' '>{card.title}</Card.Title>
              {/* Card.Text หรือ Description ยังไม่ได้ถูกนิยามใน cardData */}
            </Card.Body>
          </Card>
          
        ))}
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
}

export default Exercise;
