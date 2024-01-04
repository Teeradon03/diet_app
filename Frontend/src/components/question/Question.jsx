import { useState } from 'react';
import { Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Choice from '../Choice/Choice';
import './Question.css';
import Choice2 from '../Choice/Choice2';


const Question = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const nextQuestion = currentQuestion + 1
    const [score, setScore] = useState(0) /* เก็บคะแนนของผู้ใช้ */
    const [showScore, setShowScore] = useState(false)
    const [nextForm, setNextForm] = useState(0)

    const questions = [
        {
            questionText: 'อายุของคุณอยู่ช่วงไหน',
            answerOptions: [
                { answerText: 'อายุ 20-29 ปี', isCorrect: true },
                { answerText: 'อายุ 30-39 ปี', isCorrect: true },
                { answerText: 'อายุ 40-49 ปี', isCorrect: true },
                { answerText: 'อายุ 50+ ปี', isCorrect: true },
            ],
        },
        {
            questionText: 'เป้าหมายของคุณ',
            answerOptions: [
                { answerText: 'ลดน้ำหนัก', isCorrect: true },
                { answerText: 'ลดไขมัน', isCorrect: true },
                { answerText: 'สุขภาพดี', isCorrect: true },
                { answerText: 'เสริมสร้างกล้ามเนื้อ', isCorrect: true },
            ],
        },
        {
            questionText: 'รูปร่างของคุณ',
            answerOptions: [
                { answerText: 'ผอมเพรียว', isCorrect: true },
                { answerText: 'สมส่วน', isCorrect: true },
                { answerText: 'อวบ', isCorrect: true },
                { answerText: 'อ้วน', isCorrect: true },
            ],
        },
        {
            questionText: 'ส่วนไหนในร่างกายของคุณที่ต้องกสนลดมากที่สุด',
            answerOptions: [
                { answerText: 'ก้น', isCorrect: true },
                { answerText: 'ต้นขา', isCorrect: true },
                { answerText: 'หน้าอก', isCorrect: true },
                { answerText: 'หน้าท้อง', isCorrect: true },
            ],
        },
        {
            questionText: 'ความรู้เกี่ยวกับ IF ของคุณ',
            answerOptions: [
                { answerText: 'ไม่รู้อะไรเลย', isCorrect: true },
                { answerText: 'พอรู้บ้าง', isCorrect: true },
                { answerText: 'มีความรู้', isCorrect: true },
            ],
        },
    ];

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setcurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    };

    const handleRe = () => {
        setShowScore(false)
        setScore(0)
        setcurrentQuestion(0)
    }

    const handlePage = () => {
        
    }

	return (
		<div className='wrapper'>
			<Content style={{ padding: '0 50px' }}>
				<Col span={12} offset={6}>
					<Col span={24} style={{ textAlign: 'center' }}>
						<Col >
							{currentQuestion > 0 && (
								<button
									className='circular-button' // ปุ่มย้อนกลับ
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
											<p>{questions[currentQuestion].question}</p>
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
														className={`answer-button ${selectedOption === option ? 'highlight' : ''}`}
														onClick={(event) => handleOptionSelect(event, option)}
														style={{ margin: '35px', fontWeight: 900 }}
													>
														{option}
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