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
        <h2 className={styles.subHead}>Local Health Figures</h2>

        <div className={styles.tabLocal}>
          <div className={styles.localData}>
            <Localdata info={this.state.info} />
          </div>
          <div className={styles.localChart}>
            <LocalChart info={this.state.info} />
          </div>
          <div className={styles.localDaily}>
            <Localdaily info={this.state.info} />
          </div>
        </div>
        {/* ------------------------------------------------------ */}

        <h2 className={styles.subHead}>Global Health Figures</h2>
        <div className={styles.tabGlobal}>
          <div className={styles.globalData}>
            <Global info={this.state.info} />
          </div>
          <div className={styles.globalChart}>
            <GlobalChart info={this.state.info} />
          </div>
          <div className={styles.globalDaily}>
            <GlobalDaily info={this.state.info} />
          </div>
        </div>
        {/* ------------------------------------------------------ */}
        {/* animation */}
        {/* <div className={styles.animation_area}>
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
        </div> */}
        {/* ------------------------------------------------------ */}
        <Footer info={this.state.info} />
      </div>
    );
  }
}

export default App;
