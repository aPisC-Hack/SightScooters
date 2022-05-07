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
    <VStack>
      <HStack h={12} bg="cyan.400" w="100%" justify="space-between">
        <Button variant="solid" colorScheme={"cyan"} onClick={onToggle}>
          <Center fontSize="xl">
            <FaBars />
          </Center>
        </Button>
        <Text></Text>
      </HStack>
      <Box position="absolute">
        <Center fontSize="xl">
          <Text fontWeight="bold" fontSize="xl">
            TIER
          </Text>
        </Center>
      </Box>
      <Box flex={1}>{children}</Box>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
}
