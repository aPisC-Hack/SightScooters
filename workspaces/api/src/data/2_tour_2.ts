import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    "name":"Rolling in the Castle",
    "description":"In the Buda Castle we provide a guided tour where you can enyoj one of the most interesting sights of the city. The tour is guided by Horváth Jenő",
    "time": 15,
    "distance": "2 km",
    "rating": "4.3",
    "ratingCount": "420",      
    "price": "2500",
    "isGuided": true,
    "guideName": "Horváth Jenő",
    "guideRating": "platina",
    "guideCompletedTours": 130,
    "guideRelationshipStatus": "Single",
  });

  await TourModel.addLandmark(tour.id, 2);
  await TourModel.addLandmark(tour.id, 1);
}
