import { Button, IconButton } from "@chakra-ui/react";
import { ILandmark } from "common";
import { IoBasket } from "react-icons/io5";
import { LandmarkQuery } from "../../queries/landmark.query";

type Props = {
  landmark: ILandmark;
  callback: Function;
};

export default function TicketBuyButton({ landmark, callback }: Props) {
  return (
    <IconButton
      aria-label="Buy ticket"
      icon={<IoBasket />}
      colorScheme="gray"
      padding={2}
      fontSize="xl"
      borderRadius="50%"
      onClick={async () => {
        await LandmarkQuery.saveAsMyLandmark(landmark);
        callback();
      }}
      shadow="lg"
    />
  );
}
