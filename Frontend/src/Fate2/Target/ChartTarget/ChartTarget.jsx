import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ChartTarget.css"




Chart.register(...registerables);

const ChartTarget = () => {
  const [formData, setFormData] = useState({
    Weight15: '',
    Weight30: '',
  });

  const [chartData, setChartData] = useState({
    labels: ['Weight After 15 Days', 'Weight After 30 Days'],
    datasets: [
      {
        label: 'Weight15',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [],
      },
      {
        label: 'Weight30',
        backgroundColor: 'rgba(192,75,192,0.4)',
        borderColor: 'rgba(192,75,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(192,75,192,0.6)',
        hoverBorderColor: 'rgba(192,75,192,1)',
        data: [],
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const updateChartData = () => {
    // อัพเดตข้อมูลใน datasets
    setChartData((prevChartData) => ({
      labels: ['Weight After 15 Days', 'Weight After 30 Days'],
      datasets: [
        {
          ...prevChartData.datasets[0], // คัดลอกค่าเดิม
          data: [...prevChartData.datasets[0].data, formData.Weight15],
        },
        {
          ...prevChartData.datasets[1], // คัดลอกค่าเดิม
          data: [...prevChartData.datasets[1].data, formData.Weight30],
        },
      ],
    }));
  };

  const handleSave = () => {
    // เก็บข้อมูลที่ผู้ใช้กรอกไว้
    const newData = {
      Weight15: formData.Weight15,
      Weight30: formData.Weight30,
    };

    // แสดงข้อมูลที่เก็บไว้
    console.log('Data saved:', newData);

    // แสดง popup
    window.alert('บันทึกแล้ว');

    // รีเซ็ตค่า Weight15 และ Weight30
    setFormData((prevFormData) => ({
      ...prevFormData,
      Weight15: '',
      Weight30: '',
    }));

    // อัพเดตแผนภูมิ
    updateChartData();
  };

  const buttonStyle = {
    fontWeight: 900,
    // เพิ่มสไตล์อื่น ๆ ตามต้องการ
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['Weight After 15 Days', 'Weight After 30 Days'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <p className="text-head">เป้าหมายที่คุณต้องการ</p>

      <div className="contenner">
        <p className="text-ChartTarget1">น้ำหนักหลังจากลด 15 วัน</p>
        <div className="ChartTarget1">
          <input
            type="number"
            placeholder="กรุณากรอกค่า"
            value={formData.Weight15}
            onChange={(e) => handleInputChange('Weight15', e.target.value)}
          />
        </div>
        <p className="text-ChartTarget2">น้ำหนักหลังจากลด 30 วัน</p>
        <div className="ChartTarget2">
          <input
            type="number"
            placeholder="กรุณากรอกค่า"
            value={formData.Weight30}
            onChange={(e) => handleInputChange('Weight30', e.target.value)}
          />
        </div>

        <Bar data={chartData} options={options} />

        <div className="button-container">
          <button className="save-button" onClick={handleSave}>
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartTarget;
