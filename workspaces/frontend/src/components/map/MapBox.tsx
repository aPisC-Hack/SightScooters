import React, { useRef, useEffect, useState, Suspense } from "react";
import { Box, Center, Spinner } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { ICoordinate } from "../../../../common/src/ICoordinate";
import { createNoSubstitutionTemplateLiteral } from "typescript";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFrYWlhcyIsImEiOiJjbDJ1dXE4ZWswNW1rM2xxbWNwNXNscXp1In0.ul-FWyyp5sCQFlewmUrcsg";

type Props = {
  coordinates: Array<ICoordinate>;
};

export default function MapBox({ coordinates }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    0, 0,
  ]);
  useEffect(() => {
    console.log("reeee ");
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  //https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/
  useEffect(() => {
    if (map.current && mapContainer.current) return;
    if (!mapContainer.current) return;
    console.log("asdf");
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: currentPosition,
      zoom: 10,
      scrollZoom: true,
    });
    map.current.on("load", () => {
      map?.current?.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coordinates.map((coordinate) => {
              return [coordinate.latitude, coordinate.longitude];
            }),
          },
        },
      });
      map?.current?.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });
    });
  }, [mapContainer.current]);

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
