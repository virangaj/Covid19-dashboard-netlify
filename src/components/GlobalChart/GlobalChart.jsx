import React, { useState, useLayoutEffect } from "react";
import { Pie } from "react-chartjs-2";
import styles from "./GlobalChart.module.css";

const Chart = ({ info: { data } }) => {
  console.log(data);
  //console.log(data?.local_new_cases);
  const [chartData, setChartData] = useState({
    labels: ["New", "Active", "Deaths", "Recovered"],
    datasets: [
      {
        label: "Local Covid Patients",

        data: [
          data?.local_new_cases,
          // this.props.totalCases,
          // this.props.death,
          // this.props.recovered,

          750,
          20,
          700,
        ],

        backgroundColor: [
          "rgb(30, 200, 300)",
          "rgb(20, 109, 187)",
          "red",
          "green",
        ],
      },
    ],
  });

  useLayoutEffect(() => {
    setChartData({
      labels: ["New", "Active", "Deaths", "Recovered"],
      datasets: [
        {
          label: "Local Covid Patients",

          data: [
            data?.global_new_cases,
            data?.global_total_cases - data?.global_recovered,
            data?.global_deaths,
            data?.global_recovered,
          ],

          backgroundColor: [
            "#6b85de",
            "rgb(20, 109, 187)",
            "#ff8484",
            "rgb(27, 187, 6)",
          ],
        },
      ],
    });
  }, [data]);

  return (
    <div className={styles.chart}>
      <Pie data={chartData} width={400} height={400} options={{}} />
    </div>
  );
};
export default Chart;
