import { ITour } from "../../../common/src/ITour";
import { LocalStorageQuery } from "./localstorage.query";

import axios from "axios";

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

export const TourQuery = { getOne, getNear };
