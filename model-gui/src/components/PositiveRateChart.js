import React from 'react';
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
export const options = {
  title: "Positive Rate Chart",
};

const PositiveRateChart = () => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  )
}
export default PositiveRateChart