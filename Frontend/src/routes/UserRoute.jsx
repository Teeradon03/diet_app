import { useSelector, shallowEqual } from "react-redux";
import Login from "../pages/login/Login";

export default function UserRoute({ children }) {
  const { user } = useSelector((state) => ({ ...state }), shallowEqual);
  if (!user && user.user.userId ){
    return <Login></Login>
  }
  return children

}
