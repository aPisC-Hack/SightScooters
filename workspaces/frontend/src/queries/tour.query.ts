import { ITour } from "../../../common/src/ITour";

import axios from "axios";
import { LocalStorageQuery } from "./localstorage.query";

async function getOne(id: string | undefined): Promise<ITour | undefined> {
  if (!id) return undefined;

  return (
    (await LocalStorageQuery.getEntity("customTours", id)) ||
    (await axios
      .get(`https://crafthack.apisc.host/api/tour/${id}`)
      .then((r) => r.data))
  );
}

async function getNear(): Promise<ITour[]> {
  const customs: Array<any> =
    (await LocalStorageQuery.get("customTours")) || [];
  const server = await axios
    .get(`https://crafthack.apisc.host/api/tour`)
    .then((r) => r.data);
  return [...customs.reverse(), ...server];
}

async function uploadCustomTour(tour: ITour) {
  return await LocalStorageQuery.insertEntity("customTours", tour);
}

async function saveAsMyTour(tour: ITour) {
  return await LocalStorageQuery.insertEntity("myTours", {tour: tour});
}

async function getMyTours() : Promise<ITour[]>{
  return (await LocalStorageQuery.get("myTours") || []).map((item: any) => item.tour);
}

export const TourQuery = { getOne, getNear, uploadCustomTour, getMyTours, saveAsMyTour };
