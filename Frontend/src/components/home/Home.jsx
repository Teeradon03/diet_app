import { useEffect } from "react";
import liff from "@line/liff";
import axios from "axios";
import { Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "../../store/userSlice";

const Home = () => {
  const navi = useNavigate();
  const disPatch = useDispatch();

  useEffect(() => {
    liff.init({ liffId: `${import.meta.env.VITE_LIIF_ID}` }).then(() => {

      handleLineLogin();

    });
  }, []);
  const roleRedirect = (role) => {
    if (role) {
      if (role === "user") {
        setTimeout(() => navi("/form"), 3000);
      } else {
        setTimeout(() => navi("/admin/index"), 3000);
      }
    }
    else {
      alert('WHO ARE YOU')
    }
  };

  const handleLineLogin = async () => {
    try {
      const idToken = liff.getIDToken();
      const response = await axios
        .post(`${import.meta.env.VITE_URL_API}/api/user/user-login`, idToken, {
          withCredentials: true,
        })
        console.log('response data', response)
      if (response.status === 200) {
        // console.log('response data ', response.data)
        disPatch(
          loginRedux({
            userId: response.data.user.userId,
            role: response.data.user.role,
            name: response.data.user.name,
          })
        );
        /// set userId in local storage for tracking user
        localStorage.setItem("userId", response.data.user.userId);
        /// call role redirect function and pass role in parameter
        roleRedirect(response.data.user.role);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1 className="fw-bold">โปรแกรมการลดน้ำหนัก</h1>
      </div>
    </div>
  );
};

export default Home;
