import { Route } from "react-router-dom";
import LandmarkPage from "../pages/LandmarkPage";
import RecommendationPage from "../pages/RecommendationPage";
import TourInfoPage from "../pages/TourInfoPage";
import TourPage from "../pages/TourPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";

export const appRoutes = [
  <Route path="/" element={<WelcomePage />} />,
  <Route path="/recommendation" element={<RecommendationPage />} />,
  <Route path="/tour-info/:tourId" element={<TourInfoPage />} />,
  <Route path="/tour/:tourId" element={<TourPage />} />,
  <Route path="/landmark/:landmarkId" element={<LandmarkPage />} />,
];
