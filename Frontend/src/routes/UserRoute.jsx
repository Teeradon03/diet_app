import { useSelector, shallowEqual } from "react-redux";
import Login from "../pages/login/Login";

export default function UserRoute({ children }) {
  const { user } = useSelector((state) => ({ ...state }), shallowEqual);

  return user && user.user.userId ? children : <Login />;
}
