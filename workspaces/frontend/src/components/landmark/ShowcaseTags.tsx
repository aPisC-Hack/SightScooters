import React from "react";
import { HStack, Tag } from "@chakra-ui/react";
import { ILandmark, ITour } from "common";

type Props = {
  data: ILandmark | ITour;
};

export default function ShowcaseTags({ data }: Props) {
  return (
    <HStack wrap="wrap" rowGap={2} columnGap={1}>
      {data.tags &&
        data.tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
    </HStack>
  );
}
