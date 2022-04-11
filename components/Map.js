import { useState, useEffect } from "react";
import { fetchDaymet } from "../functions/fetchDaymet";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { map } from "leaflet";
import { marker } from "leaflet";

//const text =
//  daymetData === null ? "Loading..." : daymetData.data["tmax (deg c)"][0];

/* Below is Lat & Lng for Knoxville area */
//const latlng = [35.9621, -84.2916];
const latlng = [39.699423, -96.199808];

/* below token from mapbox website */
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMWRzcm5ndjBiMWgzYmxmbGttY3IwaWwifQ.WAo10c8TQAmrdUjUIcQ5Wg";

const GetCoordinates = () => {
  const map = useMap();
  const [enteredLat, setEnteredLat] = useState("");
  const [enteredLon, setEnteredLon] = useState("");
  const [daymetData, setDaymetData] = useState(null);
  const text =
    daymetData === null ? "Loading..." : daymetData.data["tmax (deg c)"][0];

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create("div", "legend");

    const positon = L.Control.extend({
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
      console.log("Lat", e.latlng.lat, "Lng", e.latlng.lng);
      enteredLat = e.latlng.lat;
      enteredLon = e.latlng.lng;
      setEnteredLat(e.latlng.lat);
      setEnteredLon(e.latlng.lng);
      fetchDaymet({ lat: enteredLat, lon: enteredLon, setDaymetData });
      console.log("Retrieved Data", text);
    });

    map.addControl(new positon());
  }, [map]);

  return null;
};

const Map = () => {
  return (
    <MapContainer
      center={latlng} // Center the map to marker location
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
      />

      <GetCoordinates />
    </MapContainer>
  );
};

export default Map;
// ****** following Marker was above <GetCoordinates />
/*<Marker position={latlng} draggable={true} nimate={true}>
<Popup>Hey ! you found me</Popup>
</Marker>
<LocationMarker />*/
