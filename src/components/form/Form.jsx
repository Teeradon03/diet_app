import styles from './Form.module.css'

import { Link } from 'react-router-dom'
export default function Form() {
	return (
		<>
			<div className="container text-center mt-5 pt-5">
				<div className="row">
					<div className="answer mt-5 mb-5">
						<h2>
							คุณเคยกรอกแบบสอบถามหรือยัง
						</h2>
					</div>
				</div>
				<div className="row">
					<div className=" mt-5 ">
						<Link to='/ever'>
						<button className={styles.answerButton}>เคยกรอกแล้ว</button>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className=" mb-5 mt-5">
						<Link to='/somePath'>
						<button className={styles.answerButton}>ยังไม่เคยหรอก</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
