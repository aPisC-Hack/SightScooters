import React, { PropsWithChildren } from "react";
import { ChakraProvider as OriginalChakraProvider } from "@chakra-ui/react";

export default function ChakraProvider({ children }: PropsWithChildren<{}>) {
  return <OriginalChakraProvider>{children}</OriginalChakraProvider>;
}
