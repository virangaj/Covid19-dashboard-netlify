import React from "react";

import styles from "./GlobalDaily.module.css";
import CountUp from "react-countup";

const Global = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "loading..";
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>Global Daily Covid Figures</h2>
      </div>
      <div className={styles.total}>
        <i className="fas fa-procedures"></i>{" "}
        <span className={styles.label}>New Cases</span>
      </div>
      <div className={styles.totalCount}>
        <CountUp
          start={0}
          end={data.global_new_cases}
          duration={2.5}
          separator=","
        />
      </div>
      <div className={styles.total}>
        <i className="fas fa-procedures"></i>{" "}
        <span className={styles.label}>Active Cases</span>
      </div>
      <div className={styles.totalCount}>
        <CountUp
          start={0}
          end={data.global_total_cases - data.global_recovered}
          duration={2.5}
          separator=","
        />
      </div>

      <div className={styles.death}>
        <i className="fas fa-heart-broken"></i>{" "}
        <span className={styles.label}>New Death</span>
      </div>
      <div className={styles.deathCount}>
        <CountUp
          start={0}
          end={data.global_new_deaths}
          duration={2.5}
          separator=","
        />
      </div>
    </div>
  );
};

export default Global;
