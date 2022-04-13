import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { GetCoordinates } from "./GetCoordinates";

//const text =
//  daymetData === null ? "Loading..." : daymetData.data["tmax (deg c)"][0];

/* Below is Lat & Lng for Knoxville area */
//const latlng = [35.9621, -84.2916];
const latlng = [39.699423, -96.199808];

/* below token from mapbox website */
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMWRzcm5ndjBiMWgzYmxmbGttY3IwaWwifQ.WAo10c8TQAmrdUjUIcQ5Wg";

const Map = (props) => {
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

      <GetCoordinates {...props} />
    </MapContainer>
  );
};

export default Map;
// ****** following Marker was above <GetCoordinates />
/*<Marker position={latlng} draggable={true} nimate={true}>
<Popup>Hey ! you found me</Popup>
</Marker>
<LocationMarker />*/
