import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Button,
  Tag,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { ILandmark, ITour } from "common";
import LandmarkBox from "../LandmarkBox";
import LandmarkPictureBox from "../LandmarkPictureBox";
import { StarIcon } from "@chakra-ui/icons";
import LandmarkList from "../LandmarkList";
import LandmarksView from "./LandmarksView";
import TourInfo from "./TourInfo";

type Props = {
  tour: ITour;
};

export default function TourLandmarkContainer({ tour }: Props) {
  const [view, setView] = useState(false);

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Description</Tab>
        <Tab>Landmarks</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TourInfo tour={tour} />
        </TabPanel>
        <TabPanel>
          <LandmarksView landmarks={tour.landmarks} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
