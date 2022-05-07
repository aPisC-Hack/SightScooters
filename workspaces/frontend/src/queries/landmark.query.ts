import { ILandmark } from "common";
import axios from "axios";
import { LocalStorageQuery } from "./localstorage.query";

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

async function saveAsMyLandmark(landmark: ILandmark) {
  return await LocalStorageQuery.insertEntity("myLandmarks", {landmark: landmark});
}

async function getMyLandmarks() : Promise<ILandmark[]>{
  return (await LocalStorageQuery.get("myLandmarks") || []).map((item: any) => item.landmark);
}

export const LandmarkQuery = {
  getOne,
  getNear,
  saveAsMyLandmark,
  getMyLandmarks
};
