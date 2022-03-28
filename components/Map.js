import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

//mapboxgl.accessToken =
//  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMTNwdjRwcDNocHkzZG9wY3FuaXc2c3MifQ.iN_XeILmG8wdyLYxTc7erw";
//MAPBOX_ACCESS_TOKEN =
//  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMTNwdjRwcDNocHkzZG9wY3FuaXc2c3MifQ.iN_XeILmG8wdyLYxTc7erw";
//daymet_mapbox_access_token =
//  "pk.eyJ1IjoiYW51c3VyZXNoIiwiYSI6ImNsMWF2cHc4cDAxdW8zYnBiZmd2YmtucjgifQ.hyU0gtO-jXskt1_vmfL-GA";
const Map = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]} //
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`}
        //url={"https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=YOUR_MAPBOX_ACCESS_TOKEN"}
      />
      <Marker position={[40.8054, -74.0241]} draggable={true} nimate={true}>
        <Popup>Hey ! you found me</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
