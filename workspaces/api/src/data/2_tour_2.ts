import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    "name":"Szeretek lépcsőzni",
    "description":"A Budavári palotól kezdbe a budai vár körül kirándulás, mely a Halászbástyánál ér véget.",
    "time": 15,
    "distance": "2 km",
    "rating": "4.3",
    "ratingCount": "420",      
  });

  await TourModel.addLandmark(tour.id, 2);
  await TourModel.addLandmark(tour.id, 1);
}
