import LandmarkModel from "../models/landmark.model";
import TourModel from "../models/tour.model";

export default async function () {
  const tour = await TourModel.create({
    "name":"Local roundtrip",
    "description": "It’s in our DNA to provide sustainable, accessible and affordable mobility for all. Climate change won’t wait and we have to act now. This is why as of January 2020, we have committed to being fully climate-neutral and are the first micro-mobility company to do so. We go beyond reducing carbon emissions linked to charging and include production as welloperational and transportation emissions. We accounted for all greenhouse gasses tcontribute to climate change. We want to lead by example and are asking other companies micro-mobility providers to join us in being climate-neutral.It’s in our DNA to provsustainable, accessible and affordable mobility for all. Climate change won’t wait andhave to act now. This is why as of January 2020, we have committed to being fuclimate-neutral and are the first micro-mobility company to do so. We go beyond reducing carbon emissions linked to charging and include production as well operational and transportation emissions. We accounted for all greenhouse gasses tcontribute to climate change. We want to lead by example and are asking other companies micro-mobility providers to join us in being climate-neutral.",
    "time": 10,
    "distance": "4 km",
    "rating": "5.0",
    "ratingCount": "10000",   
    "price": 1337,   
    "isGuided": false,
  });

  await TourModel.addLandmark(tour.id, 6);
  await TourModel.addLandmark(tour.id, 7);
  await TourModel.addLandmark(tour.id, 8);
}
