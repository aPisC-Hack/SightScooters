import React from "react";
import { Checkbox } from "@chakra-ui/react";

type Props = {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
};

export default function CheckableBox({ checked, onCheckedChange }: Props) {
  return (
    <Checkbox
      position="absolute"
      padding={2}
      borderRadius={4}
      opacity={1}
      bg="blue.100"
      left={0}
      top={0}
      size="lg"
      colorScheme="gray"
      isChecked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
    />
  );
}
