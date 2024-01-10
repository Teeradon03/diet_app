import { Link } from "react-router-dom"
import styles from './Ever.module.css'
import GoBack from "../goBack/GoBack"
export default function Ever() {

	return (
		<div className="container text-center pt-3 col-sm-10 col-lg-8 col-md-8 col-xl-6">
				< GoBack />
			<div className="row justify-content-center mt-5">
				<div className="answer mt-5 ">
					<h1 style={{ margin: '10px', fontWeight: 900 }}>
						รหัสลูกค้า
					</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="mt-5 col-8">
					<Link to='/customerkey'>
						<button className={styles.everButton}
						style={{ margin: '25px', fontWeight: 900 }}
					>
					มีรหัสลูกค้า</button>
					</Link>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="mb-5 col-8">
					<button className={styles.everButton}
							style={{ margin: '25px', fontWeight: 900 }}
						>
						ไม่มีรหัสลูกค้า
					</button>
				</div>
			</div>

			<div className="row mt-5 justify-content-center">
				<div className="mt-5 col-sm-8 col-8">
					<button className={styles.everNext}
							style={{fontWeight: 900 }}
						>
						ดำเนินการต่อ</button>
				</div>
			</div>
		</div>
	)
}

