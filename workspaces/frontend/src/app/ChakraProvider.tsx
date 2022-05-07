import React, { PropsWithChildren } from "react";
import {
  ChakraProvider as OriginalChakraProvider,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    white: "#fffaf6",
    black: "#253161",
    cyan: {
      50: "#e6faf8",
      100: "#c8eae8",
      200: "#a7dbd7",
      300: "#59f7eb",
      400: "#35f3e6",
      500: "#20e0cc",
      600: "#1cc9b7",
      700: "#067a72",
      800: "#004944",
      900: "#001a18",
    },
    orange: {
      50: "#ffede0",
      100: "#ffccb4",
      200: "#ffae80",
      300: "#fe8d4e",
      400: "#f4462c",
      500: "#da260b",
      600: "#ab1d08",
      700: "#7a1304",
      800: "#4c0900",
      900: "#200000",
    },
    blue: {
      50: "#e3f1ff",
      100: "#b6d6fc",
      200: "#7ebaff",
      300: "#66acff",
      400: "#2083fe",
      500: "#0a69e5",
      600: "#0052b3",
      700: "#16236b",
      800: "#0e1a50",
      900: "#03071a",
    },
  },
  components: {
    Text: {
      defaultProps: {
        color: "#253161",
      },
    },
  },
});

(window as any).theme = theme;

export default function ChakraProvider({ children }: PropsWithChildren<{}>) {
  return (
    <OriginalChakraProvider theme={theme}>{children}</OriginalChakraProvider>
  );
}
