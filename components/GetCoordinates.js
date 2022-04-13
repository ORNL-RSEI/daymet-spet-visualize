import { useEffect } from "react";
import { fetchDaymet } from "../functions/fetchDaymet";
import { useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Marker } from "react-leaflet";

export const GetCoordinates = (props) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create("div", "legend");

    const position = L.Control.extend({
      options: {
        position: "bottomleft",
      },

      onAdd: function () {
        info.textContent = "Click on map";
        return info;
      },
    });

    map.on("click", (e) => {
      info.textContent = e.latlng;
      const enteredLat = e.latlng.lat;
      const enteredLon = e.latlng.lng;
      console.log("Lat", e.latlng.lat, "Lng", e.latlng.lng);
      props.setEnteredLat(e.latlng.lat);
      props.setEnteredLon(e.latlng.lng);
      fetchDaymet({
        lat: enteredLat,
        lon: enteredLon,
        setDaymetData: props.setDaymetData,
      });
      // console.log("Retrieved Data", text);
    });

    map.addControl(new position());
  }, [map]);

  return (
    <Marker position={{ lat: props.enteredLat, lng: props.enteredLon }}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
