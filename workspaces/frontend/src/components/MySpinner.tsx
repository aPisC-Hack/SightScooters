import {
  Box,
  Center,
  Spinner,
  useTimeout,
  Container,
  keyframes,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function MySpinner({}: Props) {
  const [enabled, setEnabled] = useState(false);
  useTimeout(() => {
    setEnabled(true);
  }, 500);
  return enabled ? (
    <Container
      h="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={999}
    >
      <MySpinnerInner />
    </Container>
  ) : null;
}

export function MySpinnerInner() {
  return (
    <Box
      as={motion.div}
      animation={animation}
      padding="2"
      bgGradient="linear(to-l, #20e0cc, #0a69e5)"
      width="12"
      height="12"
      display="flex"
    />
  );
}
