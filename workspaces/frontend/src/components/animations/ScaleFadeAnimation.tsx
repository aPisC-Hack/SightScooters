import { Box, ScaleFade } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { useInViewport } from "react-in-viewport";

type Props = {};

export default function ScaleFadeAnimation({
  children,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLElement>(null);
  const { enterCount } = useInViewport(
    ref as any,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <ScaleFade initialScale={0} in={enterCount > 0}>
      <Box ref={ref as any}>{children}</Box>
    </ScaleFade>
  );
}
