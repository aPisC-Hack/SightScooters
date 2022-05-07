import { Route, Routes } from "react-router-dom";
import TourContainer from "../components/landmark/TourContainer";
import LandmarkPage from "../pages/LandmarkPage";
import RecommendationPage from "../pages/RecommendationPage";
import TourInfoPage from "../pages/TourInfoPage";
import TourPage from "../pages/TourPage";
import MyTourPage from "../pages/MyToursPage";
import MyLandmarksPage from "../pages/MyLandmarksPage";
import { TourQuery } from "../queries/tour.query";
import NavigationPage from "../pages/NavigationPage";
import { Container } from "@chakra-ui/react";
import { jsx } from "@emotion/react";

export const appRoutes = (
  <Routes>
    <Route path="/navigate/:tourId" element={<NavigationPage />} />,
    {ContainerizedRoute({ path: "/tour/:tourId", element: <TourPage /> })}
    {ContainerizedRoute({ path: "/mylandmarks", element: <MyLandmarksPage /> })}
    {ContainerizedRoute({ path: "/mytours", element: <MyTourPage /> })}
    {ContainerizedRoute({ path: "/landmark", element: <LandmarkPage /> })}
    {ContainerizedRoute({
      path: "/tours",
      element: (
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
      ),
    })}
  </Routes>
);

function ContainerizedRoute(props: { element: JSX.Element; path: string }) {
  return (
    <Route
      path={props.path}
      element={<Container maxW="container.lg">{props.element}</Container>}
    />
  );
}
