import { Box } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

interface IMapProps {
  center?: [number, number];
  zoom?: number;
  scrollZoom?: boolean;
}

export const MapContext = React.createContext<mapboxgl.Map | null>(null);

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFrYWlhcyIsImEiOiJjbDJ1dXE4ZWswNW1rM2xxbWNwNXNscXp1In0.ul-FWyyp5sCQFlewmUrcsg";

export default function Map({
  children,
  center = [19.034959, 47.501958],
  zoom = 13,
  scrollZoom = true,
}: PropsWithChildren<IMapProps>) {
  const mapBoxRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapBoxRef.current) return;
    if (!!map) return;

    const _map = new mapboxgl.Map({
      container: mapBoxRef.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
      scrollZoom: scrollZoom,
    });

    _map.on("load", () => {
      setMap(_map);
      console.log("Map loaded");
    });
    (window as any).map = _map;
  }, [mapBoxRef.current]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState([0, 0]);

  return (
    <MapContext.Provider value={map}>
      <Box ref={mapBoxRef} w="100%" h="100%" className="map-container" />
      <Box display="none">{children}</Box>
    </MapContext.Provider>
  );
}
