import {
  Box,
  Button,
  Center,
  Container,
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

const headerHeight = 12;

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box pt={headerHeight} height="100%" color="black">
      <Box pt={2} flex={1} height="100%" overflow="auto">
        {children}
      </Box>
      <Box position="fixed" w="100%" top={0} h={headerHeight}>
        <Box position="absolute" top={0} left={0} w="100%" h="100%">
          <Center h="100%" fontSize="xl">
            <Text fontWeight="bold" fontSize="xl" color="black">
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
          <DrawerCloseButton
            colorScheme="cyan"
            bg="cyan.400"
            _hover={{ bg: "cyan.500" }}
          />
          <DrawerBody p={4} py={0}>
            <VStack w="100%" align="stretch" gap={2} p={0}>
              <Text fontSize="2xl" fontWeight="bold">
                TIER Sight Scooters
              </Text>
              <LinkButton onClose={onClose} to="/tours">
                Tours
              </LinkButton>
              <LinkButton onClose={onClose} to="/landmark">
                Browse Landmarks
              </LinkButton>
              <LinkButton onClose={onClose} to="/mytours">
                My tours
              </LinkButton>
              <LinkButton onClose={onClose} to="/mylandmarks">
                My landmarks
              </LinkButton>
              <LinkButton to="/navigate/3" onClose={onClose}>
                Test nav
              </LinkButton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function LinkButton({
  children,
  to,
  onClose,
}: PropsWithChildren<{ to: string; onClose: Function }>) {
  return (
    <Button
      onClick={() => onClose()}
      as={Link}
      to={to}
      colorScheme="cyan"
      fontWeight="bold"
    >
      {children}
    </Button>
  );
}
