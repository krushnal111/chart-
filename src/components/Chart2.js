import React,{useState} from "react";
import { Bar,Pie} from "react-chartjs-2";
import Dropdown from "./DropDown";

const Chart2 = ({fetch}) => {
  const Labels = fetch.map((e) => e.name);
  const dataPrice = fetch.map((e) => e.number);
  const [dropDownData,setDropDownData] = useState('')

  const onData = (getData) =>{
    setDropDownData(getData);
  }
  const dynamicColors = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  const ChartData = {
    labels: Labels,
    datasets: [
      {
        label: "Product Name & Price",
        data: dataPrice,
        backgroundColor: dynamicColors,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
      },
    ],

  };

 const options={
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Product Name & Price",
      fontSize: 25,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 15,
            fontColour: "#000",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontSize: 16,
            fontColour: "#000",
          },
        },
      ],

  }}
  let chart1="NO DATA FOUND"
  if (dropDownData === "Bar" ){

    chart1=(
      <Bar options={options} data={ChartData}></Bar>
    )
  }
  else if (dropDownData === "Pie") {
    chart1=(
      <Pie options={options} data={ChartData}></Pie>
    )
  }
  
  return (
    <div>
    <div> <Dropdown onData={onData}/></div>
      <div
        style={{
          width: "50%",
          height: "400px",
          display: "inline-flex",
          backgroundColor: "lightblue",
        }}
      >
      {chart1}

 </div>
</div>
  );
};

export default Chart2;