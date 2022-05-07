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
  const customs = (await LocalStorageQuery.get("customTours")) || [];
  const server = await axios
    .get(`https://crafthack.apisc.host/api/tour`)
    .then((r) => r.data);
  return [...customs, ...server];
}

async function uploadCustomTour(tour: ITour) {
  return await LocalStorageQuery.insertEntity("customTours", tour);
}

export const TourQuery = { getOne, getNear, uploadCustomTour };
