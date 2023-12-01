import { useState } from "react";
import GoBack from "../goBack/GoBack";
export default function CustomerKey() {

  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(message)
  };

  return (
    <div className="container text-center pt-3">
        < GoBack/>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-8 col-12">
          <h2>INPUT THE SHIT KEY HERE!!! </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-8 text-start mt-4">
            <div className="mb-3">
              <label htmlFor="" className="form-label">Pleas Input correctly shit key here </label>
              <input type="text" className="form-control" name="key" id="key" aria-describedby="helpId" placeholder="nanoX12345" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center  fixed-bottom mb-5 pb-5">
          <div className="col-12  mb-5">
            <button type='button' className="btn btn-secondary pe-5 ps-5" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
