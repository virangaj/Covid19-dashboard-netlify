import React from "react";

import styles from "../styles.module.css";
import CountUp from "react-countup";

const Global = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "loading..";
  }
  var death = ((data?.global_deaths / data?.global_total_cases) * 100).toFixed(
    2
  );
  var recover = (
    (data?.global_recovered / data?.global_total_cases) *
    100
  ).toFixed(2);
  //console.log(death);
  return (
    <div className={styles.container}>
      <div>
        <h2>Global Covid Figures</h2>
      </div>
      <div className={styles.total}>
        <i className="fas fa-hospital-user"></i>{" "}
        <span className={styles.label}>Total Cases</span>
      </div>
      <div className={styles.totalCount}>
        <CountUp
          start={0}
          end={data.global_total_cases}
          duration={2.5}
          separator=","
        />
      </div>
      <div className={styles.healthy}>
        <i class="fas fa-street-view"></i>{" "}
        <span className={styles.label}>Total Recovered</span>
      </div>
      <div className={styles.healthyCount}>
        <CountUp
          start={0}
          end={data.global_recovered}
          duration={2.5}
          separator=","
        />{" "}
        - {recover}%
      </div>

      <div className={styles.death}>
        <i className="fas fa-bed"></i>{" "}
        <span className={styles.label}>Death</span>
      </div>
      <div className={styles.deathCount}>
        <CountUp
          start={0}
          end={data.global_deaths}
          duration={2.5}
          separator=","
        />{" "}
        - {death}%
      </div>
    </div>
  );
};

export default Global;
