import React from "react";
import { Box, Button, ButtonGroup, Center, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {};

export default function WelcomePage({}: Props) {
  return (
    <Container width="100%" height="100%" bg="cyan">
      <Box padding="5" alignItems="center">
        <Center>
          <ButtonGroup variant="solid">
            <Button
              colorScheme="blue"
              bg="blue.900"
              size="lg"
              height="150px"
              width="40"
              borderRadius={50}
              margin="3"
            >
              <Link to="/recommendation">Trip Browsing</Link>
            </Button>
            <Button
              colorScheme="blue"
              bg="blue.900"
              size="lg"
              height="150px"
              width="40"
              borderRadius={50}
              margin="3"
            >
              Button2
            </Button>
          </ButtonGroup>
        </Center>
        <Center>
          <ButtonGroup variant="solid" margin="0">
            <Button
              colorScheme="blue"
              bg="blue.900"
              size="lg"
              height="150px"
              width="40"
              borderRadius={50}
              margin="3"
            >
              Button3
            </Button>
            <Button
              colorScheme="blue"
              bg="blue.900"
              size="lg"
              height="150px"
              width="40"
              borderRadius={50}
              margin="3"
            >
              Button4
            </Button>
          </ButtonGroup>
        </Center>
      </Box>
    </Container>
  );
}
