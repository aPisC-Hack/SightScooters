import React from "react";
import { Box, Center, VStack } from "@chakra-ui/react";
import { MdElectricScooter } from "react-icons/md";

type Props = {
  text: string;
};

export default function EmptyPage({ text }: Props) {
  return (
    <Center height="100%" width="100%">
      <VStack padding={4}>
        <MdElectricScooter size="3xl" />
        <Box>{text}</Box>
      </VStack>
    </Center>
  );
}
