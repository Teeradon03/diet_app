import styles from "./Form.module.css";
import { Link } from "react-router-dom";


export default function Form() {
  const headingStyle = {
    fontSize: "50px",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container text-center mt-5 pt-5">
        <div className="row">
          <div className="answer mt-5 mb-5">
            <h2 style={headingStyle}>คุณเคยกรอกแบบสอบถามหรือยัง</h2>
          </div>
        </div>
        <div className="row row-centered">
          <div className="col-lg-12 mt-5 ">
            <Link to="/ever">
              <button className={styles.answerButton}>เคยกรอกแล้ว</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5 mt-5">
            <Link to="/name">
              <button className={styles.answerButton}>ยังไม่เคยกรอก</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
