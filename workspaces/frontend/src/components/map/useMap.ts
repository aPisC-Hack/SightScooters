import { useContext } from "react";
import { MapContext } from "./Map";

export function useMap() {
  return useContext(MapContext);
}
