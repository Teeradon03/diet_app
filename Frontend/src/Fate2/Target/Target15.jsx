import React, { useState } from 'react';
import { Card, notification } from 'antd';
import "./Target15.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Target15 = () => {
    const [formData, setFormData] = useState({
        Weight: '',
        TargetWeight: '',
    });

    const [originalData, setOriginalData] = useState(null);
    const [isSaveClicked, setIsSaveClicked] = useState(false);
    const [validationError, setValidationError] = useState(false);

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

        // Reset isSaveClicked and validation error when editing
        setIsSaveClicked(false);
        setValidationError(false);
    };

    const handleSave = () => {
        // Check for validation error
        if (!formData.Weight.trim() || !formData.TargetWeight.trim()) {
            // Show validation error popup
            setValidationError(true);
            return;
        }

        // Output the saved data to console
        console.log(formData);
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
                        type="text"
                        placeholder="น้ำหนักปัจจุบัน"
                        value={formData.Weight}
                        onChange={(e) => handleInputChange('Weight', e.target.value)}
                    />
                </div>

                <div className='targetWeight2'>
                    <input
                        type="text"
                        placeholder="น้ำหนักที่ต้องการ"
                        value={formData.TargetWeight}
                        onChange={(e) => handleInputChange('TargetWeight', e.target.value)}
                    />
                </div>
            </div>

            {originalData && (
                <button className='edit' onClick={handleCancelEdit}>
                    ยกเลิกแก้ไข
                </button>
            )}

            {!originalData && (
                <button className='edit' onClick={handleEdit}>
                    แก้ไขข้อมูล
                </button>
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
