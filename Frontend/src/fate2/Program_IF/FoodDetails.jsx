// FoodDetails.js
import React from 'react';

const FoodDetails = ({ selectedItem }) => {
  if (!selectedItem) {
    return null;
  }

  return (
    <div className="food-details-card">
      <h2>{selectedItem.name}</h2>
      <ul>
        {selectedItem.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {/* เพิ่มส่วนประกอบอาหารเพิ่มเติมตามต้องการ */}
    </div>
  );
};

export default FoodDetails;
