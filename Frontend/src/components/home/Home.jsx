

const Home = () => {

  const handleRedirect = () => {
    window.location.replace('/form'); // Replace the current page with the destination page
  };

  setTimeout(handleRedirect, 3000); // Set a timeout of 3 seconds (3000 milliseconds)

  return (

    <div className="container text-center mt-5 pt-5 d-flex align-items-center justify-content-center">

      <h1 className="mb-5 mt-5 pt-5 ">โปรแกรมลดน้ำหนัก</h1>

      
    </div>
  );
};

export default Home;