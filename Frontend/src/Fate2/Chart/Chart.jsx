import { useState } from "react";
import "./Chart.css"
import PieChart from "./PieChart";
import { UserData } from "./Data";

function  Chart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.amount),
        backgroundColor: [
          "#FCF6BD",
          "#D0F4DE",
          "#C0E4F6",
          "#FFBBDA",
          "#E8CFF8",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Chart;