import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
   Box,
   Button,
   Divider,
   Flex,
   HStack,
   Link,
   Text,
   useColorMode,
   useColorModeValue,
} from "@chakra-ui/react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { SiNintendoswitch } from "react-icons/si";

const ItemNav = ({ children, icon, href, ...props }: any) => (
   <HStack {...props} spacing={2} alignItems="center" h="full">
      <Text fontSize="1.2em">{icon}</Text>
      <Link href={href} variant="itemNav">
         {children}
      </Link>
   </HStack>
);

function Nav() {
   const { toggleColorMode, colorMode } = useColorMode();

   return (
      <Flex
         maxW="750px"
         boxShadow="lg"
         bg={useColorModeValue("light.secondary", "dark.secondary")}
         h="65px"
         backdropFilter="blur(10px)"
         borderRadius="full"
         mt={4}
         mx="auto"
         alignItems="center"
         justifyContent="space-between"
         px="70px"
      >
         <Flex gap={10} justifyContent="center">
            <ItemNav
               href="/category/pc"
               icon={<RiComputerLine fontSize="1.2em" />}
            >
               PC
            </ItemNav>
            <ItemNav href="/category/playstation" icon={<FaPlaystation />}>
               Playstation
            </ItemNav>
            <ItemNav href="/category/xbox" icon={<FaXbox />}>
               Xbox
            </ItemNav>
            <ItemNav href="/category/nintendo" icon={<SiNintendoswitch />}>
               Nintendo
            </ItemNav>
         </Flex>

         <Divider orientation="vertical" borderColor="teal" />

         <Box>
            <Button
               size="md"
               variant="outline"
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
