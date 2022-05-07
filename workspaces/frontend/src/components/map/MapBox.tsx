import React, { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFrYWlhcyIsImEiOiJjbDJ1dXE4ZWswNW1rM2xxbWNwNXNscXp1In0.ul-FWyyp5sCQFlewmUrcsg";

type Props = {};

export default function MapBox({}: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map && map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <Box>
      <Box
        height="80vh"
        width="100%"
        ref={mapContainer}
        className="map-container"
      />
    </Box>
  );
}
