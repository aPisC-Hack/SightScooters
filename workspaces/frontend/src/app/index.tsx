import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { appRoutes } from "./appRoutes";
import Layout from "./Layout";
import ChakraProvider from "./ChakraProvider";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout>
          <Routes>{appRoutes}</Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
