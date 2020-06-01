import React from "react";
import styles from "../styles.module.css";
import CountUp from "react-countup";

const Localdata = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "loading..";
  }
  var death = ((data?.local_deaths / data?.local_total_cases) * 100).toFixed(2);
  var recover = (
    (data?.local_recovered / data?.local_total_cases) *
    100
  ).toFixed(2);
  //console.log(death);
  return (
    <div className={styles.container}>
      <div>
        <h2>Local Covid Figures</h2>
      </div>
      <div className={styles.total}>
        <i className="fas fa-clinic-medical"></i>{" "}
        <span className={styles.label}>Total Cases</span>
      </div>
      <div className={styles.totalCount}>
        <CountUp
          start={0}
          end={data.local_total_cases}
          duration={2.5}
          separator=","
        />
      </div>
      <div className={styles.healthy}>
        <i className="fas fa-user-shield"></i>{" "}
        <span className={styles.label}>Total Recovered</span>
      </div>
      <div className={styles.healthyCount}>
        <CountUp
          start={0}
          end={data.local_recovered}
          duration={2.5}
          eparator=","
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
          end={data.local_deaths}
          duration={2.5}
          eparator=","
        />{" "}
        - {death}%
      </div>
    </div>
  );
};

export default Localdata;
