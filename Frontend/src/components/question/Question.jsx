import React, { useState } from "react";
import { Row, Col } from "antd";
import { Content } from "antd/es/layout/layout";
import "./Question.css";
import axios from "axios";

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
            question: 'คุณทานอาหารเช้าเวลาไหน',
            options: [
                { value: 1, label: 'ไม่ทานอาหารเช้า' },
                { value: 2, label: '06.00 - 08.00 น.' },
                { value: 3, label: '08.00 - 10.00 น.' },
                { value: 4, label: '10.00 - 12.00 น.' }
            ]
        },
        {
            id: 4,
            question: 'คุณทานอาหารกลางวันเวลาไหน',
            options: [
                { value: 1, label: 'ไม่ทานอาหารกลางวัน' },
                { value: 2, label: '10.00 - 12.00 น.' },
                { value: 3, label: '12.00 - 14.00 น.' },
                { value: 4, label: '14.00 - 16.00 น.' }
            ]
        },
        {
            id: 5,
            question: 'คุณทานอาหารเย็นเวลาไหน',
            options: [
                { value: 1, label: 'ไม่ทานอาหารเย็น' },
                { value: 2, label: '16.00 - 18.00 น.' },
                { value: 3, label: '18.00 - 20.00 น.' },
                { value: 4, label: '20.00 - 22.00 น.' }
            ]
        },
        {
            id: 6,
            question: 'คุณออกกำลังกายบ่อยแค่ไหน',
            options: [
                { value: 1, label: 'ทุกวัน' },
                { value: 2, label: '2-3 ครั้ง/สัปดาห์' },
                { value: 3, label: 'มากกว่าหนึ่งครั้ง/เดือน' },
                { value: 4, label: 'ไม่ออกกำลังกาย' }
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

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleOptionSelect = (event, option) => {
      setSelectedOption(option.value); // Use option.label instead of option.value
      highlightButton(event.target); // Pass the button element to highlightButton
    };
    

  function removeHighlight() {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("highlight");
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
      window.location.href = "/Choice2";
    } else if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
      setShowScore(false);
      highlightButton(); // Call highlightButton after updating the question
    } else {
      setShowScore(true);
    }


        if (questions[currentQuestion].id >= 1 && questions[currentQuestion].id <= 9) {
            console.log('ID:', questions[currentQuestion].id);
            // console.log('Question:', questions[currentQuestion].question);
            console.log('Answer:', selectedOption); // นำ console.log ไปวางตรงนี้หลังจากที่ได้ค่า selectedOption แล้ว
            sendToAPI();  // เรียกใช้ฟังก์ชันส่งข้อมูลไปยัง API Endpoint
        }

        const handleNextQuestion = (value) => {
            if (questions[currentQuestion].id === 10 || questions[currentQuestion].id === 11) {
                // console.log('Choice Selected:', value);
                // console.log('Answer:', value);

            }
        };
    };

  const sendToAPI = async () => {
    try {
      const data = {
        questionId: questions[currentQuestion].id,
        question: questions[currentQuestion].question,
        answer: selectedOption
      };

      const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/form/create-questionnaires`, data,{
          withCredentials: true
        }
      );
      // console.log(response.data); // พิมพ์ข้อความจาก server ที่ส่งกลับมา
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function highlightButton(button) {
    const buttons = document.getElementsByTagName("button");
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === button) {
        const randomColor = getRandomColor();
        buttons[i].style.backgroundColor = randomColor;
        buttons[i].classList.add("highlight");
      } else {
        buttons[i].classList.remove("highlight");
        buttons[i].style.backgroundColor = ''; // Reset background color for other buttons
      }
    }
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  const handlePreviousQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
      setSelectedOption("");
      setShowScore(false);
    }
  };

  const buttonStyle = {
    fontWeight: 900, // แก้ตามที่ต้องการ
    // เพิ่มสไตล์อื่นๆ ตามต้องการ
  };

  return (
    <div className="wrapper">
      <Content style={{ padding: "0 50px" }}>
        <Col span={12} offset={6}>
          <Col span={24} style={{ textAlign: "center" }}>
            <Col>
              {currentQuestion > 0 && (
                <button
                  className="circular-button" // Back button
                  style={buttonStyle}
                  onClick={handlePreviousQuestion}
                >
                  &lt;
                </button>
              )}
            </Col>
            {showScore ? (
              <Row>
                <Col></Col>
              </Row>
            ) : (
              <div>
                <div>
                  <div className="question" >
                    <div className="font-family">
                      <div className="ques" >
                        <p >{questions[currentQuestion].question}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Col span={24}>
                  <div className="answer">
                    <div className="font-family">
                      {questions[currentQuestion].options.map(
                        (option, index) => (
                          <div key={index}>
                            <button
                              type="button"
                              className={`answerbutton ${
                                selectedOption === option.value
                                  ? "highlight"
                                  : ""
                              }`}
                              onClick={(event) => handleOptionSelect(event, option)
                              } 
                            >
                              {option.label}{" "}
                              {/* เปลี่ยนจาก option เป็น option.label */}
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="font-family">
                    <button
                      className="next"
                      onClick={handleNextQuestion}
                      disabled={!selectedOption}
                    >
                      ถัดไป
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