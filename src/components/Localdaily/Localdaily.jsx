import React from "react";
import styles from "../styles.module.css";
import CountUp from "react-countup";

const Localdaily = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "loading..";
  }
  var active = (
    (data?.local_active_cases / data?.local_total_cases) *
    100
  ).toFixed(2);
  return (
    <div className={styles.container}>
      <div>
        <h2>Local Daily Covid Figures</h2>
      </div>
      <div className={styles.newCases}>
        <i class="fas fa-ambulance"></i>{" "}
        <span className={styles.label}>New Cases</span>
      </div>
      <div className={styles.newCasesCount}>
        <CountUp
          start={0}
          end={data.local_new_cases}
          duration={2.5}
          separator=","
        />
      </div>
      <div className={styles.active}>
        <div>
          <i className="fas fa-procedures"></i>{" "}
        </div>
        <span className={styles.label}>Active Cases</span>
      </div>
      <div className={styles.activeCount}>
        <CountUp
          start={0}
          end={data.local_active_cases}
          duration={2.5}
          separator=","
        />{" "}
        - {active}%
      </div>
      <div className={styles.death}>
        <i class="fas fa-bed"></i>{" "}
        <span className={styles.label}>New Death</span>
      </div>
      <div className={styles.deathCount}>
        <CountUp
          start={0}
          end={data.local_new_deaths}
          duration={2.5}
          separator=","
        />
      </div>
      {/* <p>Last Updated at : {data.update_date_time}</p> */}
    </div>
  );
};

export default Localdaily;
