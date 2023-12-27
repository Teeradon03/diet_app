

const Home = () => {

  setTimeout(() => window.location.replace('/form'), 3000); // Set a timeout of 3 seconds (3000 milliseconds)

  return (
    <div className="container text-center d-flex justify-content-center mt-5">
      <h1 className="mt-5 pt-5 align-items-center ">โปรแกรมลดน้ำหนัก</h1>
    </div>
  );
};

export default Home;