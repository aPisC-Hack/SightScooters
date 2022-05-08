import { Box, ScaleFade, useDisclosure } from "@chakra-ui/react";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

type Props = {};

export default function ScaleFadeAnimation({
  children,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLElement>(null);
  const { enterCount } = useInViewport(
    ref as any,
    { rootMargin: "0px" },
    { disconnectOnLeave: false },
    {}
  );
  const { isOpen, onOpen } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <ScaleFade initialScale={0} in={isOpen}>
      <Box ref={ref as any}>{children}</Box>
    </ScaleFade>
  );
}
