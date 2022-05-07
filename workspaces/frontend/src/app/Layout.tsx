import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box pos="relative">
      <Box pt={14} flex={1} height="100%" overflow="auto">
        {children}
      </Box>
      <Box
        position="fixed"
        w="100%"
        top={0}
        h={14}
        borderBottom="4px solid white"
      >
        <Box position="absolute" top={0} left={0} w="100%" h="100%">
          <Center h="100%" fontSize="xl">
            <Text fontWeight="bold" fontSize="xl">
              TIER
            </Text>
          </Center>
        </Box>
        <HStack bg="cyan.400" w="100%" h="100%" justify="space-between">
          <Button variant="solid" colorScheme={"cyan"} onClick={onToggle}>
            <Center fontSize="xl">
              <FaBars />
            </Center>
          </Button>
        </HStack>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={4}>
            <VStack w="100%" align="stretch" mt={10} gap={2} p={0}>
              <Button
                onClick={onClose}
                as={Link}
                to="/tours"
                colorScheme="cyan"
              >
                Tours
              </Button>
              <Button
                onClick={onClose}
                as={Link}
                to="/landmark"
                colorScheme="cyan"
              >
                Browse Landmarks
              </Button>
              <Button
                onClick={onClose}
                as={Link}
                to="/mytours"
                colorScheme="cyan"
              >
                My tours
              </Button>
              <Button
                onClick={onClose}
                as={Link}
                to="/mylandmarks"
                colorScheme="cyan"
              >
                My landmarks
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
