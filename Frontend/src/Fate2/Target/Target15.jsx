import React, { useState } from 'react';
import { Card } from 'antd';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import "./Target15.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const Target15 = () => {
    const [formData, setFormData] = useState({
        Weight: '',
        TargetWeight: '',
    });

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
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
            </div>
            
            <button className='edit'>
                แก้ไขข้อมูล
            </button>
            <button className='save'>
                บันทึกข้อมูล
            </button>
        </div>
    );
}

export default Target15;
