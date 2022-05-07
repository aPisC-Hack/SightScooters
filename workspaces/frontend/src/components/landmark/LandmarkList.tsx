import { ILandmark } from "common";
import { VStack } from "@chakra-ui/react";
import React from "react";
import LandmarkBox from "./LandmarkBox";
import { useApiCall } from "../../hooks/useApiCall";
import { LandmarkQuery } from "../../queries/landmark.query";
import MapIconButton from "./MapIconButton";
import TicketBuyButton from "./TicketBuyButton";
import TicketOwnedButton from "./TicketOwnedButton";
import CheckableBox from "./CheckableBox";
import ReactTagInput from "@pathofdev/react-tag-input";
import MySpinner from "../MySpinner";

type Props = {
  checkable?: boolean;
  buyable?: boolean;
  landmarks: Array<ILandmark>;
  onCheckedChange?: (landmarkId: string, checked: boolean) => void;
  checkedIds?: string[];
};

export default function LandmarkList({
  checkable = false,
  buyable = false,
  landmarks,
  onCheckedChange,
  checkedIds,
}: Props) {
  const [tags, setTags] = React.useState<Array<string>>([]);
  const apiOwned = useApiCall(() => LandmarkQuery.getMyLandmarks());
  if (!apiOwned?.value) return <MySpinner />;
  return (
    <>
      <ReactTagInput
        tags={tags}
        onChange={(newTags: Array<string>) => setTags(newTags)}
      />
      {landmarks
        .filter(
          (landmark) =>
            tags.length == 0 || tags.find((tag) => landmark.tags.includes(tag))
        )
        .map((landmark, index) => (
          <LandmarkBox
            landmark={landmark}
            key={index}
            leftChildren={
              checkable &&
              !buyable && (
                <CheckableBox
                  checked={!!checkedIds?.includes(landmark.id)}
                  onCheckedChange={(checked) =>
                    onCheckedChange?.(landmark.id, checked)
                  }
                />
              )
            }
            onClick={() =>
              onCheckedChange?.(landmark.id, !checkedIds?.includes(landmark.id))
            }
          >
            {(apiOwned.value as ILandmark[])
              .map((landmark2) => landmark2.id)
              .includes(landmark.id) ? (
              <TicketOwnedButton />
            ) : !checkable && buyable ? (
              <TicketBuyButton
                landmark={landmark}
                callback={() => apiOwned.execute()}
              />
            ) : null}

            <MapIconButton
              address={landmark.address}
              coordinate={landmark.coordinate}
            />
          </LandmarkBox>
        ))}
    </>
  );
}
