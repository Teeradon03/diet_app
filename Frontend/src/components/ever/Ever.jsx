import { Link } from "react-router-dom"
import styles from './Ever.module.css'
import { useNavigate } from "react-router-dom"
export default function Ever() {
	const navigation = useNavigate()
	return (
		<div className="container text-center pt-3">
			<div className="row">
				<div className="col-2 ">
					<button className="btn btn-secondary" onClick={() => navigation(-1)}>BACK</button>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<div className="answer mt-5 ">
					<h2>
						รหัสลูกค้า
					</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="mt-5 col-sm-6 ">
					<Link to='/customerkey'>
						<button className={styles.everButton}>มีรหัสลูกค้า</button>
					</Link>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="mb-5 col-sm-6">
					<button className={styles.everButton}>ไม่มีรหัสลูกค้า</button>
				</div>
			</div>

			<div className="row mt-5 justify-content-center">
				<div className="mt-5 col-sm-6">
					<button className={styles.everButton}>ดำเนินการต่อ</button>
				</div>
			</div>
		</div>
	)
}

