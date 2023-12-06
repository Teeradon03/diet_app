import { useState } from "react";
import GoBack from "../goBack/GoBack";
import axios from 'axios'
export default function CustomerKey() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    console.log(message)
    console.log(message.length)


      if (message.length>0){
        try {
          const response = await axios.post('http://localhost:9999/api/cusKey',  {message} );
          console.log(response)
          // Handle the response
          if (response.data) {
            console.log('Customer key submitted successfully!');
          } else {
            console.error('Error submitting customer key:', response.data.error);
          }
        } catch (error) {
          console.error('Error sending data to backend:', error.message);
        }
      }
      else{
        alert("Input some shit!!!!")

      }

    setIsLoading(false)

  };

  return (
    <div className="container text-center pt-3">
      < GoBack />
      <div className="row justify-content-center mt-5">
        <div className="col-sm-8 col-12">
          <h2>INPUT THE SHIT KEY HERE!!! </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-4  col-8 text-start mt-4">
            <div className="mb-3">
              <label htmlFor="key" className="form-label">Please input the correct key here</label>
              <input type="text" className="form-control" id="key" aria-describedby="helpId" placeholder="nanoX12345" onChange={handleChange} />

            </div>
          </div>
        </div>
        <div className="row justify-content-center  fixed-bottom mb-5 pb-5">
          <div className="col-12  mb-5">
            <button type='button' className="btn btn-secondary pe-5 ps-5" onClick={handleClick} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
