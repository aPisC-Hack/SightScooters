import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    "name":"Helyi körtúra",
    "description":"A világhírű Gamerland rendezvényhelyszín és szórakozóhelyról kiindulva egy tartalmas kirándulás egy helyi klasszikus hamburgerezőbe, és az egyik legnépszerűbb csomópontba.",
    "time": 10,
    "distance": "4 km",
    "rating": "5.0",
    "ratingCount": "10000",      
  });

  await TourModel.addLandmark(tour.id, 5);
  await TourModel.addLandmark(tour.id, 6);
  await TourModel.addLandmark(tour.id, 7);
}
