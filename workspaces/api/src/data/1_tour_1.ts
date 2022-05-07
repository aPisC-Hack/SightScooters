import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    //...
  });

  await TourModel.addLandmark(tour.id, 1);
}
