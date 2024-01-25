import React from 'react';
import Card from 'react-bootstrap/Card';
import './Table.css';

function Table() {
  const cardData = [
    {
      title: '08:00 โจ้กข้าวกล้อง อกไก่ ผักต้ม',
      imageUrl: '/public/10.jpg',
    },
    {
      title: '12:00 ข้าวกล้องผัดผัก อกไก่ย่าง',
      imageUrl: '/public/10.jpg',
    },
    {
      title: 'Card 3',
      imageUrl: '/public/10.jpg',
    },
    {
      title: 'Card 4',
      imageUrl: '/public/10.jpg',
    },
  ];

  return (
    <div>
      <br/><br/>
    <h1 className='text-if'> การลดน้ำหนัก IF</h1> <br/>
    <div className='image-box'>
      {cardData.map((card, index) => (
        <Card className='card-box' key={index}>
          <Card.Img variant="top" src={card.imageUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div> 
    <div className="button-container">
        <button className="edit-button">แก้ไขข้อมูล</button>
        <button className="save-button">บันทึกข้อมูล</button>
      </div>       
    </div>
  );
}

export default Table;
