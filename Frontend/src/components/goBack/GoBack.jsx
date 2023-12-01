
import { useNavigate } from 'react-router-dom'

export default function GoBack() {
    const navigation = useNavigate()
  return (
    <div className="row">
    <div className="col-2 ">
      <button className="btn btn-secondary" onClick={() => navigation(-1)}>BACK</button>
    </div>
  </div>
  )
}
