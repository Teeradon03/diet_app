import { useSelector, shallowEqual } from "react-redux"
import Login from "../pages/login/Login"
import { useNavigate } from "react-router-dom"
export default function UserRoute({children}) {
  const navi = useNavigate()
  const { user } = useSelector((state) => ({ ...state }), shallowEqual)
  // console.log('user route', user)
  // console.log('user route user id', user.user.userId)
  if (user && user.user.userId ){
    return children
  }
  else{
    navi('/login')
  }

}
