import { ILandmark } from "common";
import axios from "axios";

async function getOne(id: string): Promise<ILandmark> {
  return axios
    .get(`https://crafthack.apisc.host/api/landmark/${id}`)
    .then((r) => r.data);
}

async function getNear(): Promise<ILandmark[]> {
  return axios
    .get(`https://crafthack.apisc.host/api/landmark`)
    .then((r) => r.data);
}

export const LandmarkQuery = {
  getOne,
  getNear,
};
