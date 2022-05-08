import EmptyPage from "../../components/EmptyPage";
import LandmarkList from "../../components/landmark/LandmarkList";
import { useApiCall } from "../../hooks/useApiCall";
import { LandmarkQuery } from "../../queries/landmark.query";
import { Heading } from "@chakra-ui/react";

type Props = {};

export default function Index({}: Props) {
  const api = useApiCall(() => LandmarkQuery.getMyLandmarks());
  if (!api?.value) return null;
  return api.value.length == 0 ? (
    <>
      <Heading>Your tickets</Heading>
      <EmptyPage text="You should take a look at some great places in your neighborhood!" />
    </>
  ) : (
    <>
      <Heading>Your tickets</Heading>
      <LandmarkList landmarks={api.value} />
    </>
  );
}
