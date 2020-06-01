import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "Loading...";
  }
  var date = data.update_date_time;
  return (
    <div className={styles.footer}>
      <div className={styles.date}>
        <p>Last update : {date}</p>
        <p>
          Powered by :{" "}
          <a href="https://www.hpb.health.gov.lk/api/get-current-statistical">
            https://www.hpb.health.gov.lk/api/get-current-statistical
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
