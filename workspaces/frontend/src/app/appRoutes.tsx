import { Route, Routes } from "react-router-dom";
import TourContainer from "../components/landmark/TourContainer";
import LandmarkPage from "../pages/LandmarkPage";
import RecommendationPage from "../pages/RecommendationPage";
import TourInfoPage from "../pages/TourInfoPage";
import TourPage from "../pages/TourPage";
import MyTourPage from "../pages/MyToursPage";
import MyLandmarksPage from "../pages/MyLandmarksPage";
import { TourQuery } from "../queries/tour.query";

export const appRoutes = (
  <Routes>
    {/*<Route path="/" element={<WelcomePage />} />,*/}
    <Route path="/recommendation" element={<RecommendationPage />} />,
    <Route path="/tour-info/:tourId" element={<TourInfoPage />} />,
    <Route path="/tour/:tourId" element={<TourPage />} />,
    <Route path="/mytours" element={<MyTourPage />} />,
    <Route path="/mylandmarks" element={<MyLandmarksPage />} />,
    <Route path="/landmark" element={<LandmarkPage />} />,
    <Route
      path="/tours"
      element={
        <TourContainer
          forSale={true}
          toursCallable={async () => {
            const custom = await TourQuery.getMyTours();
            const all = await TourQuery.getNear();
            return all.filter(
              (item) => !custom.map((i) => i.id).includes(item.id)
            );
          }}
        />
      }
    />
    ,
  </Routes>
);
