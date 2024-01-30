import React from 'react';
import Card from 'react-bootstrap/Card';
import './Product.css';

function Product() {
  const cardData = [
    {
      title: 'nanoX2',
      imageUrl: '/public/product_img/nanox2.png',
      link: '/fate2/Nanox2', // URL ที่ต้องการนำไปหลังคลิกภาพที่ 1
    },
    {
      title: 'nanoVA',
      imageUrl: '/public/product_img/nanoVa.png',
      link: '/fate2/Nanova', // URL ที่ต้องการนำไปหลังคลิกภาพที่ 2
    },
  ];

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <br/><br/><br/>
      <h1 className='text-if'>เครื่องดื่มเพื่อสุขภาพ</h1> 
      <br/>
      <div className='image-box'>
        {cardData.map((card, index) => (
          <Card
            className='card-box'
            key={index}
            onClick={() => handleCardClick(card.link)}
            style={{ cursor: 'pointer' }}
          >
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              {/* Card.Text หรือ Description ยังไม่ได้ถูกนิยามใน cardData */}
            </Card.Body>
          </Card>
          
        ))}
      </div> 
    </div>
  );
}

export default Product;
