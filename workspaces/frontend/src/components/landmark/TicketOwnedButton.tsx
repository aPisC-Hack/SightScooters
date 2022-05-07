import { IoTicket } from "react-icons/io5";
import { IconButton } from "@chakra-ui/react";

type Props = {};

export default function TicketOwnedButton({}: Props) {
  return (
    <IconButton
      aria-label="Already bought"
      icon={<IoTicket />}
      colorScheme="green"
      padding={2}
      fontSize="xl"
      borderRadius="50%"
    />
  );
}
