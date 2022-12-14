import { Flex, Image, Link } from "@chakra-ui/react";
import { LogoNomeRazor, LogoRazor } from "../../assets";

export const Navbar = () => {
  return (
    <Flex
      h="130px"
      bg="black.300"
      w="full"
      justifyContent="space-evenly"
      flexDir="column"
      alignItems="center"
    >
      <Flex justify="start" alignItems="center" gap="10px" w="fit-content">
        <Image h="60px" src={LogoRazor} alt="logo-razor" />
        <Image h="40px" src={LogoNomeRazor} alt="logo-nome-razor" />
      </Flex>
      <Flex gap={["20px", "100px"]}>
        <Link as="a" href="#diferencialId">
          Diferencial
        </Link>
        <Link as="a" href="#produtosId">
          Produto
        </Link>
        <Link as="a" href="#criadoresId">
          Criadores
        </Link>
      </Flex>
    </Flex>
  );
};
