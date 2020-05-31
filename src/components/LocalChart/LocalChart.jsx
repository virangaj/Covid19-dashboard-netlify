import React, { useState, useLayoutEffect } from "react";
import { Pie } from "react-chartjs-2";
import styles from "./LocalChart.module.css";
const Chart = ({ info: { data } }) => {
  //console.log(data);
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
          "#6b85de",
          "rgb(20, 109, 187)",
          "#ff8484",
          "rgb(27, 187, 6)",
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
            data?.local_new_cases,
            data?.local_active_cases,
            data?.local_deaths,
            data?.local_recovered,
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
