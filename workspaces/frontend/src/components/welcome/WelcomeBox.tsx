import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
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
    <Box padding={2} bgColor="cyan" borderRadius={4} width="100%" height={"100%"} >
        <ButtonGroup variant='solid' spacing='2'>
        <Button colorScheme="blue" bg='blue.900' size="lg" height='150px' width='150px' borderRadius={50} margin="5"
        onClick={openTripBrowsing} >
            Trip Browsing
        </Button>
        <Button colorScheme="blue" bg='blue.900' size="lg" height='150px' width='150px'borderRadius={50} margin="5"  
        onClick={button2Pushed}>
            Button2
        </Button>
        </ButtonGroup>
        <ButtonGroup variant='solid' spacing='2'>
        <Button colorScheme="blue" bg='blue.900' size="lg" height='150px' width='150px'borderRadius={50} margin="5" 
        onClick={button3Pushed}>
            Button3
        </Button>
        <Button colorScheme="blue" bg='blue.900' size="lg" height='150px' width='150px'borderRadius={50} margin="5" 
        onClick={button4Pushed}>
            Button4
        </Button>
        </ButtonGroup>
    </Box>
  );
}
