import { useEffect } from "react";
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
      props.setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
    });

    map.addControl(new position());
  }, [map]);

  return (
    <Marker
      position={{ lat: props.coordinates.lat, lng: props.coordinates.lng }}
    >
      <Popup>You are here</Popup>
    </Marker>
  );
};
