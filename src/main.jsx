import { ChakraProvider } from "@chakra-ui/react";
// import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme/theme";
import LandingPage from "./pages";
import Fonts from "./theme/fonts";
// import "aos/dist/aos.css";
// import { AOS } from "aos";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    {/* <AOS /> */}
    <Fonts />
    <LandingPage />
  </ChakraProvider>
  // </React.StrictMode>
);
