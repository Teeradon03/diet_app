
import { useSelector } from "react-redux"

export default function UserRoute({children}) {
  const { user } = useSelector((state) => ({...state}))
  console.log('user route', user)
  console.log('user route user id', user.user.userId)
  return user && user.user.userId ? children : <h1> Login ก่อนเส้.. </h1>
}
