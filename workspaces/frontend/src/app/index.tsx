import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import Layout from "./Layout";
import ChakraProvider from "./ChakraProvider";
import { Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Suspense
        fallback={
          <Center height="100vh">
            <Spinner size="xl" />
          </Center>
        }
      >
        <BrowserRouter>
          <Layout>
            <Routes>{appRoutes}</Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
