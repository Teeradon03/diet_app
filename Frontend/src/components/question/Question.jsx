import React, { useState } from 'react'
import { Row, Col, Card } from 'antd'

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
        
        <Col span={24} style={{ textAlign: 'center' }}>
            <Card className="quiz-card ">
                {showScore
                    ? (
                        <Row>
                            <Col span={24}>
                                <span className="questions">
                                    Your score : {score} / {questions.length}
                                </span>
                            </Col>
                        </Row>
                    )
                    : (
                        <Row>
                            <Col span={24}>
                                <div className="questions" >{questions[currentQuestion].questionText} </div>
                            </Col>
                            <Col span={12} offset={6}>
                                <div className="answer"> {questions[currentQuestion].answerOptions.map((Item, index) =>
                                    <button className="answer-button"
                                        key={index}
                                        onClick={() => handleAnswer(Item.isCorrect)}>{Item.answerText}
                                    </button>)}
                                </div>
                            </Col>
                        </Row>
                    )
                }

            </Card>
        </Col>
    )
}
export default Question;
>>>>>>> 397a097450a71faad5f5edfc30e9423cea6e3e45
