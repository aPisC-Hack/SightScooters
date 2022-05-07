import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    "name":"Helyi körtúra",
    "description": "Using real time-lapse imagery from Google Earth Timelapse and other sources, the Doodle shows the impact of climate change across four different locales around our planet. Stay tuned throughout the day to view these scenes, each remaining on the homepage for several hours at a time. Acting now and together to live more sustainably is necessary to avoid the worst effects of climate change. Go here to learn more about climate change and how you can take action.",
    "time": 20,
    "distance": "8 km",
    "rating": "4.2",
    "ratingCount": "5",   
    "price": 0,   
    "isGuided": false,
  });

  await TourModel.addLandmark(tour.id, 9);
  await TourModel.addLandmark(tour.id, 10);
  await TourModel.addLandmark(tour.id, 11);
}
