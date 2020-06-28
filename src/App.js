import React from "react";
import styles from "./App.module.css";

import {
  Global,
  LocalChart,
  Localdata,
  Localdaily,
  GlobalDaily,
  GlobalChart,
  Footer,
  Map,
} from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    info: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    //console.log(fetchedData);
    this.setState({ info: fetchedData });
    //console.log(this.state.info);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topic}>
          <h1>
            C<i className="fas fa-virus"></i>VID 19 LIVE SITUATIONAL ANALYSIS
            DASHBOARD
          </h1>
        </div>
        <br />
        <div className={styles.date}>
          <p>LAST UPDATE : {this.state.info.data?.update_date_time}</p>
        </div>

        <h2 className={styles.subHead}>Health Figures in Sri Lanka</h2>
        <br />

        <div className={styles.tabLocal}>
          <div className={styles.localData}>
            <Localdata info={this.state.info} />
          </div>

          <br />
          <div className={styles.localChart}>
            <LocalChart info={this.state.info} />
          </div>

          <br />
          <div className={styles.localDaily}>
            <Localdaily info={this.state.info} />
          </div>

          <br />
        </div>

        <div className={styles.pcr}>
          <p>
            TOTAL PCR TESTS PERFORMED :{" "}
            {this.state.info.data?.total_pcr_testing_count}
          </p>
        </div>

        {/* ------------------------------------------------------ */}

        <h2 className={styles.subHead}>Global Health Figures</h2>
        <br />

        <div className={styles.tabGlobal}>
          <div className={styles.globalData}>
            <Global info={this.state.info} />
          </div>
          <br />

          <div className={styles.globalChart}>
            <GlobalChart info={this.state.info} />
          </div>
          <br />

          <div className={styles.globalDaily}>
            <GlobalDaily info={this.state.info} />
          </div>
          <br />
        </div>
        <h2 className={styles.subHead}>Global Map Stats</h2>
        <br />
        <div className={styles.map}>
          <Map />
        </div>

        <br />
        {/* ------------------------------------------------------ */}
        {/* animation */}
        <div className={styles.animation_area}>
          <ul className={styles.box_area}>
            <li>
              <i className="fas fa-virus"></i>
            </li>
            <li>
              <i className="fas fa-virus"></i>
            </li>
            <li>
              <i className="fas fa-virus"></i>
            </li>
            <li>
              <i className="fas fa-virus"></i>
            </li>
            <li>
              <i className="fas fa-virus"></i>
            </li>
            <li>
              <i className="fas fa-virus"></i>
            </li>
            <li>
              <i className="fas fa-virus"></i>
            </li>
          </ul>
        </div>
        {/* ------------------------------------------------------ */}
        <Footer info={this.state.info} />
        <br />
      </div>
    );
  }
}

export default App;
