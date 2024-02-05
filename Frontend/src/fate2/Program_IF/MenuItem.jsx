// MenuItem.js
import React from 'react';

const MenuItem = ({ item, selected, onClick }) => {
  return (
    <div
      className={`menu-item ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <p>{item.name}</p>
    </div>
  );
};

export default MenuItem;
