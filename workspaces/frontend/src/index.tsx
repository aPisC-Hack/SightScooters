import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense
        fallback={
          <Center height="100vh">
            <Spinner size="xl" />
          </Center>
        }
      >
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
