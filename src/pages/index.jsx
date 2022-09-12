import { Flex } from "@chakra-ui/react";
import {
  Footer,
  SectionHeader,
  Navbar,
  SectionFeature,
  SectionWorkstation,
  SectionTestimonials,
  SectionZAP,
  SectionCall,
} from "../components";

function LandingPage() {
  return (
    <Flex flexDir="column" gap="5vh">
      <Navbar />
      <Flex flexDir="column" justifyItems="center" px="10vw" gap="5vh">
        <SectionHeader />
        <SectionFeature />
        <SectionWorkstation />
        <SectionZAP />
        <SectionTestimonials />
        <SectionCall />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default LandingPage;
