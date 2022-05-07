import React, { useEffect } from "react";
import { useMap } from "./useMap";

type Props = {};

export default function MapLayer({}: Props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    console.log("Register layer");

    map.addLayer({
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
  }, [map]);

  return null;
}
