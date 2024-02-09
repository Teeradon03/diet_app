
import { useSelector, shallowEqual } from "react-redux"
import Login from "../pages/login/Login"
export default function UserRoute({children}) {
  const { user } = useSelector((state) => ({ ...state }), shallowEqual)
  console.log('user route', user)
  console.log('user route user id', user.user.userId)
  return user && user.user.userId ? children : <h1> Please Login</h1>
}
