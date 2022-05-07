import { ITour } from "../../../common/src/ITour";

import axios from "axios";

async function getOne(id: string | undefined): Promise<ITour | undefined> {
  if (!id) return undefined;
  return axios
    .get(`https://crafthack.apisc.host/api/tour/${id}`)
    .then((r) => r.data);
}

async function getNear(): Promise<ITour[]> {
  return axios.get(`https://crafthack.apisc.host/api/tour`).then((r) => r.data);
}

export const TourQuery = { getOne, getNear };
