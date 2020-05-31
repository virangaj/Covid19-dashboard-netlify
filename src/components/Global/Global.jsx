import React from "react";

import styles from "./Global.module.css";
import CountUp from "react-countup";

const Global = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "loading..";
  }

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
        <i className="fas fa-heart"></i>{" "}
        <span className={styles.label}>Total Recovered</span>
      </div>
      <div className={styles.healthyCount}>
        <CountUp
          start={0}
          end={data.global_recovered}
          duration={2.5}
          separator=","
        />
      </div>

      <div className={styles.death}>
        <i className="fas fa-heart-broken"></i>{" "}
        <span className={styles.label}>Death</span>
      </div>
      <div className={styles.deathCount}>
        <CountUp
          start={0}
          end={data.global_deaths}
          duration={2.5}
          separator=","
        />
      </div>
    </div>
  );
};

export default Global;
