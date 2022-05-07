import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    "name":"Népligeti kiruccanás",
    "description":"A Hősök terétől elindulva egy kis hangvételű túra a Városligetben a Vajdahunyad várát meglátogatva.",
    "time": 10,
    "distance": "1 km",
    "rating": "4.3",
    "ratingCount": "666",   
    "price": "700",
    "isGuided": false,
});

  await TourModel.addLandmark(tour.id, 3);
  await TourModel.addLandmark(tour.id, 5);
  await TourModel.addLandmark(tour.id, 4);
}
