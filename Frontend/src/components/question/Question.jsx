import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './Question.css';
import axios from 'axios';




const Question = () => {
    const questions = [
        {
            id: 1,
            question: 'อายุของคุณอยู่ช่วงไหน',
            options: [
                { value: 1, label: 'อายุ 20 - 29 ปี' },
                { value: 2, label: 'อายุ 30 - 39 ปี' },
                { value: 3, label: 'อายุ 40 - 49 ปี' },
                { value: 4, label: 'อายุ 50+ ปี' }
            ]
        },
        {
            id: 2,
            question: 'ความรู้เกี่ยวกับ IF ของคุณ',
            options: [
                { value: 1, label: 'ไม่รู้อะไรเลย' },
                { value: 2, label: 'พอรู้บ้าง' },
                { value: 3, label: 'มีความรู้' }
            ]
        },
        {
            id: 3,
            question: 'คุณทานอาหารเช้าช่วงเวลาไหน',
            options: [
                { value: 1, label: 'ไม่รับประทานอาหารเช้า' },
                { value: 2, label: 'ระหว่าง 6.00 น. - 8.00 น.' },
                { value: 3, label: 'ระหว่าง 8.00 น. - 10.00 น.' },
                { value: 4, label: 'ระหว่าง 10.00 น. - 12.00 น.' }
            ]
        },
        {
            id: 4,
            question: 'คุณทานอาหารกลางวันช่วงเวลาไหน',
            options: [
                { value: 1, label: 'ไม่รับประทานอาหารกลางวัน' },
                { value: 2, label: 'ระหว่าง 10.00 น. - 12.00 น.' },
                { value: 3, label: 'ระหว่าง 12.00 น. - 14.00 น.' },
                { value: 4, label: 'ระหว่าง 14.00 น. - 16.00 น.' }
            ]
        },
        {
            id: 5,
            question: 'คุณทานอาหารเย็นช่วงไหน',
            options: [
                { value: 1, label: 'ไม่รับประทานอาหารเย็น' },
                { value: 2, label: 'ระหว่าง 16.00 น. - 18.00 น.' },
                { value: 3, label: 'ระหว่าง 18.00 น. - 20.00 น.' },
                { value: 4, label: 'ระหว่าง 20.00 น. - 22.00 น.' }
            ]
        },
        {
            id: 6,
            question: 'คุณออกกำลังกายบ่อยแค่ไหน',
            options: [
                { value: 1, label: 'ทุกวัน' },
                { value: 2, label: '2-3 ครั้ง/สัปดาห์' },
                { value: 3, label: 'มากกว่าหนึ่งครั้ง/เดือน' },
                { value: 4, label: 'ไม่ออกกำลังกายเลย' }
            ]
        },
        {
            id: 7,
            question: 'คุณนอนวันละกี่ชั่วโมง',
            options: [
                { value: 1, label: 'น้อยกว่า 5 ชั่วโมง' },
                { value: 2, label: '5 - 6 ชั่วโมง' },
                { value: 3, label: '7 - 8 ชั่วโมง' },
                { value: 4, label: 'มากกว่า 8 ชั่วโมง' }
            ]
        },
        {
            id: 8,
            question: 'คุณเคยควบคุมน้ำหนักหรือไม่',
            options: [
                { value: 1, label: 'เคย' },
                { value: 2, label: 'ไม่เคย' }
            ]
        },
        {
            id: 9,
            question: 'เป้าหมายในการลดน้ำหนัก',
            options: [
                { value: 1, label: 'ช้าเเต่มั่นคง' },
                { value: 2, label: 'ปานกลาง' },
                { value: 3, label: 'เร็วที่สุด' }
            ]
        },

    ];


	const sendToAPI = async () => {
		try {
			const data = {
				questionId: questions[currentQuestion].id,
				answer: 5
			};

			const response = await axios.post('http://localhost:9999/api/form/create-questionnaires', data);
			console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
		} catch (error) {
			console.error('Error:', error);
		}
	};


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    const handleOptionSelect = (event, option) => {
        setSelectedOption(option.value);
    };

    function removeHighlight() {
        const buttons = document.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('highlight');
        }
    }

    const handleNextQuestion = () => {
        const isCorrect = selectedOption === questions[currentQuestion].answer;

        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (questions[currentQuestion].id === 9) {
            setShowScore(true);
            // เรียกใช้ฟังก์ชัน sendToAPI() จาก handleNextQuestion โดยตรงที่ ID 9
            window.location.href = '/Choice2';
        } else if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption('');
            setShowScore(false);
        } else {
            setShowScore(true);
        }


			// เรียกใช้ฟังก์ชันส่งข้อมูลไปยัง API Endpoint
			sendToAPI();
		}

		function handleNextQuestion(value) {
			if (questions[currentQuestion].id === 10 || questions[currentQuestion].id === 11) {
				console.log('Choice Selected:', value);
				console.log('Answer:', value);
			}
		}
	};

        if (questions[currentQuestion].id >= 1 && questions[currentQuestion].id <= 9) {
            console.log('ID:', questions[currentQuestion].id);
            console.log('Question:', questions[currentQuestion].question);
            console.log('Answer:', selectedOption); // นำ console.log ไปวางตรงนี้หลังจากที่ได้ค่า selectedOption แล้ว
            sendToAPI();  // เรียกใช้ฟังก์ชันส่งข้อมูลไปยัง API Endpoint
        }

        const handleNextQuestion = (value) => {
            if (questions[currentQuestion].id === 10 || questions[currentQuestion].id === 11) {
                console.log('Choice Selected:', value);
                console.log('Answer:', value);

            }
        };
    };


    const sendToAPI = async () => {
        try {
            const data = {
                questionId: questions[currentQuestion].id,
                question: questions[currentQuestion].question,
                answer: 5,
                userId: 1
            };

            const response = await axios.post('http://localhost:9999/api/create-questionnaires', data);
            console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
        } catch (error) {
            console.error('Error:', error);
        }
    };

    function highlightButton(button) {
        const buttons = document.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] === button) {
                buttons[i].classList.add('highlight');
            } else {
                buttons[i].classList.remove('highlight');
            }
        }
    }

    const handlePreviousQuestion = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
            setSelectedOption('');
            setShowScore(false);
        }
    };

    const buttonStyle = {
        fontWeight: 900, // แก้ตามที่ต้องการ
        // เพิ่มสไตล์อื่นๆ ตามต้องการ
    };

    return (
        <div className='wrapper'>
            <Content style={{ padding: '0 50px' }}>
                <Col span={12} offset={6}>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Col >
                            {currentQuestion > 0 && (
                                <button
                                    className='circular-button' // Back button
                                    style={buttonStyle}
                                    onClick={handlePreviousQuestion}
                                >
                                    &lt;
                                </button>
                            )}
                        </Col>
                        {showScore ? (
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                        ) : (
                            <div>
                                <div>
                                    <div className='question'>
                                        <div className='font-family'>
                                            <h1>Question {currentQuestion + 1} </h1>
                                            <div className='ques'>
                                                <p style={{ width: '500px' }}>{questions[currentQuestion].question}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Col span={24}>
                                    <div className='answer'>
                                        <div className='font-family'>
                                            {questions[currentQuestion].options.map((option, index) => (
                                                <div key={index}>
                                                    <button
                                                        type="button"
                                                        className={`answerbutton ${selectedOption === option.value ? 'highlight' : ''}`}
                                                        onClick={(event) => handleOptionSelect(event, option)}
                                                        style={{ margin: '45px', fontWeight: 900 }}
                                                    >
                                                        {option.label} {/* เปลี่ยนจาก option เป็น option.label */}
                                                    </button>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className='font-family'>
                                        <button
                                            className='next'
                                            onClick={handleNextQuestion}
                                            disabled={!selectedOption}
                                            style={{ fontWeight: 900 }}
                                        >
                                            หน้าถัดไป
                                        </button>
                                    </div>
                                </Col>
                            </div>
                        )}
                    </Col>
                </Col>
            </Content>
        </div>
    );
};

export default Question;
