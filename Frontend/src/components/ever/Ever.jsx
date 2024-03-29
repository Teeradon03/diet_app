
import styles from './Ever.module.css'
import GoBack from "../goBack/GoBack"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Ever() {
	const [selectedOption, setSelectedOption] = useState('');
	const navi = useNavigate()
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const handleNext = () => {
		// ตรวจสอบ selectedOption เพื่อเปลี่ยนหน้าเมื่อคลิก "ดำเนินการต่อ"
		if (selectedOption === 'มีรหัสลูกค้า') {
			navi('/customerkey');
		}
	};

	return (
		<div className="container text-center pt-3 col-sm-10 col-lg-8 col-md-8 col-xl-6">
			< GoBack />
			<div className="row justify-content-center mt-5">
				<div className="answer mt-5 ">
					<h1 style={{ margin: '10px', fontWeight: 900 }}
					>
						รหัสลูกค้า
					</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="mt-5 col-8">
					<button className={selectedOption === 'มีรหัสลูกค้า' ? `${styles.everButton} ${styles.highlightever}` : styles.everButton}
						style={{ margin: '25px', fontWeight: 900 }}
						onClick={() => handleOptionSelect('มีรหัสลูกค้า')}
					>
						มีรหัสลูกค้า</button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="mb-5 col-8">
					<button className={selectedOption === 'ไม่มีรหัสลูกค้า' ? `${styles.everButton} ${styles.highlightever}` : styles.everButton}
						style={{ margin: '25px', fontWeight: 900 }}
						onClick={() => handleOptionSelect('ไม่มีรหัสลูกค้า')}
					>
						ไม่มีรหัสลูกค้า
					</button>
				</div>
			</div>
			<div className="row mt-5 justify-content-center">
				<div className="mt-5 col-sm-8 col-8">
					<button className={styles.everNext}
						style={{ fontWeight: 900 }}
						onClick={handleNext}
					>
						ถัดไป</button>
				</div>
			</div>
		</div>
	)
}