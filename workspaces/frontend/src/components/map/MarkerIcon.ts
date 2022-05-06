import L from "leaflet";

interface Props {
    iconPath: string
}

const MarkerIcon = new L.Icon({
    iconUrl: "/assets/icons/marker.ico",
    iconSize: new L.Point(20, 20),
  });

export { MarkerIcon };