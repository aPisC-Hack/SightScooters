import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  await LandmarkModel.create({
    //...
  });

  //...
}
