import React, { useEffect } from "react";
import { useMap } from "./useMap";

type Props = {
  config: mapboxgl.AnyLayer;
};

export default function MapLayer({ config }: Props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    console.log("Register layer");

    map.addLayer(config);
  }, [map]);

  return null;
}
