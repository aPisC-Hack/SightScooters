import mapboxgl from "mapbox-gl";
import React, { useEffect } from "react";
import { useMap } from "./useMap";

type Props = {};

export default function MapUser({}: Props) {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const locator = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });
    map.addControl(locator);
    setTimeout(() => (locator as any)._geolocateButton.click(), 50);
    return () => void map.removeControl(locator);
  }, [map]);
  return null;
}
