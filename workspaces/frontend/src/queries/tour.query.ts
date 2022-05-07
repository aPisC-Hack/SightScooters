import { ITour } from "../../../common/src/ITour";

import axios from "axios";
import { LocalStorageQuery } from "./localstorage.query";

async function getOne(id: string | undefined): Promise<ITour | undefined> {
  if (!id) return undefined;

  return (
    LocalStorageQuery.getEntity("customTours", id) ||
    axios.get(`https://crafthack.apisc.host/api/tour/${id}`).then((r) => r.data)
  );
}

async function getNear(): Promise<ITour[]> {
  const custom = LocalStorageQuery.get("customTours");
  return axios.get(`https://crafthack.apisc.host/api/tour`).then((r) => r.data);
}

async function uploadCustomTour(tour: ITour) {
  return tour;
}

export const TourQuery = { getOne, getNear };
