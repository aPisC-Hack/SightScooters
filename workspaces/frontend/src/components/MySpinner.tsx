import { Box, Center, Spinner, useTimeout } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

export default function MySpinner({}: Props) {
  const [enabled, setEnabled] = useState(false);
  useTimeout(() => {
    setEnabled(true);
  }, 500);

  return enabled ? (
    <Center pt={4}>
      <Spinner size="xl" />
    </Center>
  ) : null;
}
