import { cards } from "@/interface/interface";
import { Box, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

function Cards({ name, img }: cards) {
    return (
        <Box
            w="380px"
            h="240px"
            bg={useColorModeValue("light.secondary", "dark.secondary")}
            borderRadius="2xl"
            boxShadow="xl"
            transition='0.3s'
            _hover={{
                transform: 'scale(1.03)'
            }}
        >
            <Image
                borderTopRadius="2xl"
                src={img}
                alt={name}
                h="190px"
                objectFit="cover"
                w="100%"
            />
            <HStack justifyContent="center" px={3} mt={3}>
                <Text>{name}</Text>
            </HStack>
        </Box>
    );
}

export default Cards;
