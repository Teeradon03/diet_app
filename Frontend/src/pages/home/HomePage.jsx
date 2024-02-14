
import { useNavigate } from "react-router-dom";

import styles from "../login/Login.module.css";

import SwipeButton from "react-swipezor";
function HomePage() {
  const linkTo = useNavigate();

  return (
    <>
      <div className="container text-center">
        <div className="row ">
          <div className="col-12 pt-2">
            <img
              src="logo-nano.png"
              alt="logo"
              className={styles.nanoLogoImage}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 mt-5 ">
            <h1 className="text-center">
              ยินดีต้อนรับเข้าสู่ <br /> โปรแกรมลดน้ำหนัก
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 mt-5 pt-5 w-auto p-3">
            <SwipeButton
              mainText="เข้าสู่ระบบ"
              overlayText="เข้าสู่ระบบ"
              onSwipeDone={() => linkTo("/login")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
