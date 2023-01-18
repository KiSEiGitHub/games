import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ItemNav = ({ children, icon, ...props }: any) => (
  <HStack {...props} spacing={2} alignItems="center" h="full">
    <Text fontSize="1.2em">{icon}</Text>
    <Text>{children}</Text>
  </HStack>
);

function Nav() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      pos="fixed"
      top={0}
      maxW="750px"
      px="50px"
      boxShadow="lg"
      bg={useColorModeValue("light.secondary", "dark.secondary")}
      h="65px"
      backdropFilter="blur(10px)"
      borderRadius="full"
      mt={4}
      left="50%"
      ml="-275px"
      alignItems="center"
      justifyContent="space-between"
      gap={10}
    >
      <Flex gap={10}>
        <ItemNav icon={<RiComputerLine fontSize="1.2em" />}>PC</ItemNav>
        <ItemNav icon={<FaPlaystation />}>Playstation</ItemNav>
        <ItemNav icon={<FaXbox />}>Xbox</ItemNav>
        <ItemNav icon={<SiNintendoswitch />}>Nintendo</ItemNav>
      </Flex>

      <Divider orientation="vertical" borderColor='teal'/>

      <Box>
        <Button
          size="sm"
          onClick={toggleColorMode}
          borderRadius="full"
          boxShadow="lg"
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    </Flex>
  );
}

export default Nav;
