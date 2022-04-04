import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

/**Below is Default public token created using a private account */
//MAPBOX_ACCESS_TOKEN =
//  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMTNwdjRwcDNocHkzZG9wY3FuaXc2c3MifQ.iN_XeILmG8wdyLYxTc7erw";
/**Below is token created using a private account with name Daymet*/
//daymet_mapbox_access_token =
//  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMWF2cHc4cDAxdW8zYnBiZmd2YmtucjgifQ.hyU0gtO-jXskt1_vmfL-GA";

//  Below is a public access TOKEN that works with command click
//https://api.mapbox.com/v4/mapbox.satellite/page.html?access_token=pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMWRzcm5ndjBiMWgzYmxmbGttY3IwaWwifQ.WAo10c8TQAmrdUjUIcQ5Wg#3/-0.18/0.09

// From Forest Carter
// https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk[…]ImNsMWRzcm5ndjBiMWgzYmxmbGttY3IwaWwifQ.WAo10c8TQAmrdUjUIcQ5Wg
//url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}

/* below token from mapbox website */
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMWRzcm5ndjBiMWgzYmxmbGttY3IwaWwifQ.WAo10c8TQAmrdUjUIcQ5Wg";

const Map = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]} //
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
      />
      <Marker position={[40.8054, -74.0241]} draggable={true} nimate={true}>
        <Popup>Hey ! you found me</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
