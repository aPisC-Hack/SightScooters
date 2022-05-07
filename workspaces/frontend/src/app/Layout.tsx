import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return <Box>{children}</Box>;
}
