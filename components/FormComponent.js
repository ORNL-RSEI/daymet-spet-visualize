import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export const FormComponent = (props) => {
  const [formCoordinates, setFormCoordinates] = useState({ lat: "", lng: "" });

  useEffect(() => {
    if (props.coordinates.lat === null) return;
    setFormCoordinates(props.coordinates);
  }, [props.coordinates]);

  function onSubmit(event) {
    event.preventDefault();
    const newCoordinates = {
      lat: formCoordinates.lat,
      lng: formCoordinates.lng,
    };
    props.setCoordinates(newCoordinates);
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div id="form">
        <label htmlFor="lat">Latitude</label>
        <input
          id="lat"
          name="lat"
          type="number"
          value={formCoordinates.lat}
          onChange={(e) => {
            setFormCoordinates((old) => ({ ...old, lat: e.target.value }));
          }}
          required
        />
        <br></br>

        <label htmlFor="lng">Longitude</label>
        <input
          id="lng"
          name="lng"
          type="number"
          value={formCoordinates.lng}
          onChange={(e) => {
            setFormCoordinates((old) => ({ ...old, lng: e.target.value }));
          }}
          required
        />
        <br></br>

        <label htmlFor="climateVariable">Climate Variable</label>

        <select
          id="climateVariable"
          name="climateVariable"
          value={props.climateVariable}
          onChange={(e) => {
            props.setClimateVariable(e.target.value);
          }}
        >
          <option value="dayl (s)">dayl</option>
          <option value="prcp (mm/day)">prcp</option>
          <option value="srad (W/m^2)">srad</option>
        </select>

        <br></br>

        <label htmlFor="start">Start date:</label>

        <input
          type="date"
          name="startDate"
          min="1990-01-01"
          max="2000-01-01"
          value={props.startDate}
          onChange={(e) => {
            props.setStartDate(e.target.value);
          }}
        ></input>

        <br></br>
        <br></br>

        <button id="button1" type="submit">
          Get Temperature
        </button>
      </div>
    </form>
  );
};
