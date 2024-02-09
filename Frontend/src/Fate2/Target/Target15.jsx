import React, { useState } from 'react';
import { Card, notification } from 'antd';
import "./Target15.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscChevronLeft } from "react-icons/vsc";
import { Link } from 'react-router-dom';





const Target15 = () => {
    const [formData, setFormData] = useState({
        Weight: '',
        TargetWeight: '',
    });

    const [originalData, setOriginalData] = useState(null);
    const [isSaveClicked, setIsSaveClicked] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [saveCount, setSaveCount] = useState(0);  // เพิ่ม state เพื่อติดตามจำนวนครั้งที่บันทึก
    const [isEditing, setIsEditing] = useState(false)
    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });

        // Reset validation error when input changes
        setValidationError(false);
    };

    const handleEdit = () => {
        // Save the original data before editing
        setOriginalData({ ...formData });

        // Set isEditing to true to display input fields
        setIsEditing(false);

        // Reset isSaveClicked, validation error, and saveCount when editing
        setIsSaveClicked(false);
        setValidationError(false);
        setSaveCount(0);
    };

    const handleSave = () => {
        // Check for validation error
        if (!formData.Weight.trim() || !formData.TargetWeight.trim()) {
            // Show validation error popup
            setValidationError(true);
            return;
        }

        // Output the saved data to the console
        console.log(`น้ำหนักครั้งที่ ${saveCount + 1}`);
        console.log(formData);
        setIsSaveClicked(true);

        // Increase saveCount
        setSaveCount(saveCount + 1);

        setIsSaveClicked(true);

        // Show notification
        notification.success({
            message: 'บันทึกเสร็จสิ้น',
            description: 'ข้อมูลถูกบันทึกเรียบร้อยแล้ว',
            placement: 'topRight',
        });
    };

    const handleCancelEdit = () => {
        // Reset formData to the originalData
        setFormData({ ...originalData });

        // Reset the originalData state
        setOriginalData(null);

        // Reset isSaveClicked and validation error when canceling edit
        setIsSaveClicked(false);
        setValidationError(false);
        setSaveCount(0);
    };


    const buttonStyle = {
        fontWeight: 900, // แก้ตามที่ต้องการ
        // เพิ่มสไตล์อื่นๆ ตามต้องการ
    };



    return (
        <div>
            <p className='text-head'> เป้าหมายที่คุณต้องการ</p>
            <Card className='target1'>
                <p className='text-target1'> น้ำหนักปัจจุบัน </p>
            </Card>

            <Card className='target2'>
                <p className='text-target2'> น้ำหนักที่ต้องการ </p>
            </Card>

            <div className='contenner'>
                <div className="targetWeight1">
                    <input
                        type="number"
                        placeholder="น้ำหนักปัจจุบัน"
                        value={formData.Weight}
                        onChange={(e) => handleInputChange('Weight', e.target.value)}
                    />
                </div>

                <div className='targetWeight2'>
                    <input
                        type="number"
                        placeholder="น้ำหนักที่ต้องการ"
                        value={formData.TargetWeight}
                        onChange={(e) => handleInputChange('TargetWeight', e.target.value)}
                    />
                </div>
                <Link to="/ChartTarget">
                    <Card className='target3'>
                        <p className='text-target3'> กราฟน้ำหนัก </p>
                    </Card>
                </Link>
                <Link to="/Home48">
                    <button
                        className="chevron-icon"
                        style={buttonStyle}
                    // ไม่ต้องมี handlePreviousClick หรืออื่น ๆ ที่เกี่ยวข้อง
                    >
                        <VscChevronLeft />
                        {/* ไอคอนย้อนกลับ */}
                    </button>
                </Link>
            </div>



            {!originalData && (
                <Link to="/CancelEdit">
                    <button className='edit' onClick={handleEdit}>
                        แก้ไขข้อมูล
                    </button>
                </Link>
            )}

            {originalData && (
                <button className='save' onClick={handleSave}>
                    บันทึกข้อมูล
                </button>
            )}
            {!originalData && (
                <button className='save' onClick={handleSave} disabled={validationError}>
                    บันทึกข้อมูล
                </button>
            )}

            {isSaveClicked && (
                <div className="popup">
                    <p className='text-popup'>บันทึกเสร็จสิ้น</p>
                </div>
            )}

            {validationError && (
                <div className="popup-error">
                    <p className='text-popup-error'>กรุณากรอกค่าน้ำหนัก</p>
                </div>
            )}
        </div>
    );
}

export default Target15;
