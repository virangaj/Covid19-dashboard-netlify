import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import styles from "../styles.module.css";
import mapStyle from "./MapStyle";
function Map() {
  const [latest, setLatest] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResult(responseArr[1].data);
      });
  });

  const countriesLocations = result.map((data, i) => {
    return (
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "red",
          backgroundColor: "#FFF",
          height: "25px",
          width: "35px",
          textAlign: "center",
          borderRadius: "30%",
        }}
      >
        <img height="10px" src={data.countryInfo.flag} alt="Flag" />
        <br />
        {data.cases}
      </div>
    );
  });

  //   console.log(result);
  return (
    <div className={styles.map}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDRqc9wNdMMXYUtjxWsC6ssbO4yCki8RMQ" }}
          defaultCenter={{ lat: 20, lng: 77 }}
          defaultZoom={4}
          options={{ styles: mapStyle.lightBule }}
        >
          {countriesLocations}
        </GoogleMapReact>
      </div>
    </div>
  );
}
export default Map;
