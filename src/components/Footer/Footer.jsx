import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "Loading...";
  }

  return (
    <div className={styles.footer}>
      <div className={styles.date}>
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
