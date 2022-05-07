import React from "react";
import { Box, Checkbox, Circle } from "@chakra-ui/react";

type Props = {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
};

export default function CheckableBox({ checked, onCheckedChange }: Props) {
  return (
    <Box borderRadius={4} bg="cyan.100" p={2} lineHeight={0}>
      <Checkbox
        opacity={1}
        colorScheme="cyan"
        bg="white"
        size="lg"
        isChecked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
    </Box>
  );
}
