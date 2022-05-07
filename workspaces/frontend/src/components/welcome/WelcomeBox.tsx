import React from "react";
import { Box, Button, ButtonGroup, Center, Container } from "@chakra-ui/react";
import { IWelcomeBox } from "./IWelcomeBox";

type Props = {};

export default function WelcomeBox({ }: Props) {
    const openTripBrowsing = () => {
        console.log("trying to open trip browsing window..")
    };
    const button2Pushed = () => {
        console.log("button 2 Pushed")
    };
    const button3Pushed = () => {
        console.log("button 3 Pushed")
    };
    const button4Pushed = () => {
        console.log("button 4 Pushed")
    };
  return (
    <Container width="100%" height="100%" bg="cyan">
        <Box padding="5" alignItems="center">
            <Center>
                <ButtonGroup variant='solid'>
                    <Button colorScheme="blue" bg='blue.900' size="lg"  height='150px' width='40' borderRadius={50} margin="3"
                    onClick={openTripBrowsing} >
                        Trip Browsing
                    </Button>
                    <Button colorScheme="blue" bg='blue.900' size="lg"  height='150px' width='40' borderRadius={50} margin="3"  
                    onClick={button2Pushed}>
                        Button2
                    </Button>
                </ButtonGroup>
            </Center>
            <Center>
                <ButtonGroup variant='solid' margin='0'>
                    <Button colorScheme="blue" bg='blue.900' size="lg"  height='150px' width='40' borderRadius={50} margin="3" 
                    onClick={button3Pushed}>
                        Button3 
                    </Button>
                    <Button colorScheme="blue" bg='blue.900' size="lg"  height='150px' width='40' borderRadius={50} margin="3" 
                    onClick={button4Pushed}>
                        Button4
                    </Button>
                </ButtonGroup>
            </Center>
        </Box>
    </Container>
  );
}
