import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import "./User_Profile.css";

const User_Profile = () => {
  const [image, setImage] = useState('/10.jpg');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <img src={image} alt="Profile" className="user-profile-image" />
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
      {/* Add additional profile details or content here */}
      <h1>ข้อมูลส่วนตัว</h1>
      <div className='contener-button'>
      <Link to="/fate2/edit_data">
      <button className='button-user'>แก้ไขข้อมูลผู้ใช้งาน</button>
      </Link>
      <Link to="/fate2/chang_password">
      <button className='button-user'>เปลี่ยนรหัสผ่าน</button>
      </Link>
      </div>
    </div>
  );
};

export default User_Profile
