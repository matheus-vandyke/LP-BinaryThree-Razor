import { Flex, SimpleGrid } from "@chakra-ui/react";
import { RiFilePaperFill } from "react-icons/ri";
import {
  AiFillTool,
  AiFillFileText,
  AiFillMessage,
  AiFillBulb,
  AiFillPhone,
} from "react-icons/ai";
import { CardFeature } from "./CardFeature";
import { HeadingSections } from "../ui/HeadingSections";
import { useEffect } from "react";
import Aos from "aos";

const featureArray = [
  {
    heading: "Licitações",
    text: "Orçamentos personalizados para processos administrativos e licitações, tanto para órgão públicos, quanto para o setor privado",
    icon: RiFilePaperFill,
  },
  {
    heading: "Seleção de componentes homologados",
    text: "Testados pela desenvolvedora do software que você utiliza",
    icon: AiFillTool,
  },
  {
    heading: "Garantia",
    text: "Maior prazo de garantia dentro do mercado nacional",
    icon: AiFillFileText,
  },
  {
    heading: "Estudo Técnico",
    text: "Para identificar a máquina ideal para cada profissional dentro da empresa",
    icon: AiFillBulb,
  },
  {
    heading: "Pós-vendas",
    text: "Você receberá um acompanhamento desde a compra até a entrega do produto",
    icon: AiFillPhone,
  },
  {
    heading: "Suporte on-site",
    text: "com atendimento presencial em todos os estados do Brasil",
    icon: AiFillMessage,
  },
];

export const SectionFeature = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Flex
      flexDir="column"
      as="header"
      h="auto"
      w="full"
      justify="center"
      gap="30px"
      id="diferencialId"
    >
      <HeadingSections
        HighlightTitle="Aumentar a Performance"
        title="O nosso negócio é Aumentar a Performance do seu negócio"
        text="Máquinas para uso em computação gráfica, renderização profissional,
        simulações em realtime, análises complexas de dados e softwares de alta
        exigência."
      />
      <SimpleGrid
        minChildWidth={["250px", "340px"]}
        spacing="30px"
        justifyItems="center"
      >
        {featureArray.map((feature) => (
          <div key={feature.heading} data-aos="zoom-in">
            <CardFeature
              key={feature.heading}
              icon={feature.icon}
              heading={feature.heading}
              text={feature.text}
            />
          </div>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
