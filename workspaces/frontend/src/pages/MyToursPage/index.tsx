import TourContainer from "../../components/landmark/TourContainer";
import { useApiCall } from "../../hooks/useApiCall";
import { TourQuery } from "../../queries/tour.query";

type Props = {};

export default function Index({}: Props) {
  const api = useApiCall(() => TourQuery.getMyTours());
  if (!api?.value) return null;
  return (
    <TourContainer
      forSale={false}
      toursCallable={() => TourQuery.getMyTours()}
    />
  );
}
