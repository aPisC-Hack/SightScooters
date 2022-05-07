import { IoTicket } from "react-icons/io5";
import { IconButton } from "@chakra-ui/react";

type Props = {};

export default function TicketOwnedButton({}: Props) {
  return (
    <IconButton
      aria-label="Already bought"
      icon={<IoTicket />}
      position="absolute"
      right={12}
      top={1}
      colorScheme="green"
      padding={2}
      fontSize="xl"
      borderRadius="50%"
    />
  );
}
