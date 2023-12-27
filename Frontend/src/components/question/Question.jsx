// import questions from '../../choice.js';
import { questions } from "../../assets/choice";

const Question = () => {
    console.log(questions)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [valueSelected, setValueSelected] = useState({})

    const handleOptionSelect = (event, option) => {
        setSelectedOption(option);
        highlightButton(event.target);
        setValueSelected(option)
    };
    console.log(selectedOption)
    // console.log(valueSelected)

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
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption('');
            removeHighlight();
        } else {
            setShowScore(true);
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

    const handlePreviousQuestion = () => { /*ทำปุ่มย้อนกลับคำถาม */
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
            setSelectedOption('');
            removeHighlight();
            setShowScore(false); // Set to false to show questions again if navigating back
        }
    };


    return (
        <>
            <div className='container'>
			<div className='row justify-content-center'>
				<div className='col-12 '>
					<div className='col-8'>
						{currentQuestion > 0 && (
							<button
								className='circular-button' // Apply circular button styles
								onClick={handlePreviousQuestion}
							>
								&lt;
							</button>
						)}
					</div>
					{showScore ? (
						<div className='row justify-content-center'>
							<div className='col-8'>
								<div className='question'>
									Some...
								</div>
							</div>
						</div>
					) : (
						<div className='row justify-content-center'>
							<div className='col-8'>
								<div className='question'>
									<h2>Question {currentQuestion + 1}</h2>
									<p>{questions[currentQuestion].question}</p>
								</div>
							</div>
							<div className='col-10'>
								<div className='answer'>
									{questions[currentQuestion].options.map((option, index) => (
										<div key={index} >
											<button
												type="button"
												className='answer-button'
												id={questions.id}
												value={questions.option}
												onClick={(event) => { handleOptionSelect(event, option); }}
												style={{ margin: '5px' }}
											>
												{option}
											</button>
										</div>
									))}
								</div>
								<div className='col-10'>
									<button className='next-button'
										onClick={handleNextQuestion}
										disabled={!selectedOption}
									>
										หน้าถัดไป
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
        </>


    )
}
export default Question;
