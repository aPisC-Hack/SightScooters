import { Button } from "@chakra-ui/react";
import { ILandmark } from "common";
import { LandmarkQuery } from "../../queries/landmark.query";

type Props = {
  landmark: ILandmark;
  callback: Function;
};

export default function TicketBuyButton({ landmark, callback }: Props) {
  return (
    <Button
      size="sm"
      position="absolute"
      left={1}
      top={1}
      onClick={async () => {
        await LandmarkQuery.saveAsMyLandmark(landmark);
        callback();
      }}
    >
      Buy ($$$)
    </Button>
  );
}
