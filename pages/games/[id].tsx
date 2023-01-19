import { Paragraphe, Title } from "@/typographie/typo";
import {
   Box,
   Container,
   Divider,
   Flex,
   Grid,
   GridItem,
   HStack,
   Image,
   Link,
   Tag,
   Text,
   useColorModeValue,
} from "@chakra-ui/react";
import { GoFlame } from "react-icons/go";

function oneGame({ game }: any) {
   console.log(game);

   return (
      <>
         <Box
            maxW="100%"
            bgImage={game["background_image"]}
            bgAttachment="fixed"
            bgSize="cover"
            bgRepeat="no-repeat"
            h="550px"
            mt={3}
         />
         <Container maxW="7xl" mt={10} pos="relative">
            <Grid
               pos="absolute"
               top="-240px"
               templateColumns="repeat(2, 1fr)"
               templateRows="auto 1fr auto"
               gap={10}
            >
               <GridItem colStart={1} rowStart={1}>
                  <Image
                     src={game["background_image"]}
                     alt={game.name}
                     borderRadius="xl"
                  />
               </GridItem>
               <GridItem
                  colStart={2}
                  borderRadius="lg"
                  rowStart={1}
                  backdropFilter="blur(10px)"
                  p={3}
               >
                  <Title textAlign="center" mb={3} mt={3}>
                     {game.name}
                  </Title>
                  <HStack
                     maxW="485px"
                     mx="auto"
                     borderRadius="md"
                     h="45px"
                     // eslint-disable-next-line react-hooks/rules-of-hooks
                     bg={useColorModeValue("light.secondary", "dark.primary")}
                     p={2}
                  >
                     <Text>Steam</Text>
                     <Divider orientation="vertical" borderColor="teal" />
                     <Text>Steam</Text>
                     <Divider orientation="vertical" borderColor="teal" />
                     <Text>✔️ En stock</Text>
                     <Divider orientation="vertical" borderColor="teal" />
                     <Text>✔️ Téléchargement digital</Text>
                  </HStack>

                  <HStack mt={4} justifyContent="center">
                     <GoFlame color="red" fontSize="1.3em" />
                     <Text textAlign="center">
                        {game["reviews_count"]} users in this page
                     </Text>
                  </HStack>
               </GridItem>

               <GridItem colStart={1} rowStart={2}>
                  <Title>About</Title>
                  <Paragraphe mt={3} textAlign="justify">
                     {game["description_raw"].slice(0, 500)}...
                  </Paragraphe>
                  <Link href="#more" mt={3} display="block">
                     Read more
                  </Link>
                  <Title mt={3}>Users tags</Title>
                  <Flex gap={2} flexWrap="wrap" mt={3}>
                     {game.tags.map((item: any, key: number) => (
                        <Tag key={key}>{item.name}</Tag>
                     ))}
                  </Flex>
               </GridItem>
               <GridItem colStart={2} rowStart={2}>
                  <HStack spacing={3} mt={10}>
                     <Text
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue(
                           "light.text.secondary",
                           "dark.text.secondary"
                        )}
                     >
                        Developper :
                     </Text>
                     {game.developers.map((item: any, key: number) => (
                        <Text key={key}>{item.name}</Text>
                     ))}
                  </HStack>
                  <HStack spacing={5} mt={3}>
                     <Text
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue(
                           "light.text.secondary",
                           "dark.text.secondary"
                        )}
                     >
                        Publishers :
                     </Text>
                     {game.publishers.map((item: any, key: number) => (
                        <Text key={key}>{item.name}</Text>
                     ))}
                  </HStack>
                  <HStack spacing={5} mt={3}>
                     <Text
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue(
                           "light.text.secondary",
                           "dark.text.secondary"
                        )}
                     >
                        Release :
                     </Text>
                     <Text>{game.released}</Text>
                  </HStack>
                  <HStack spacing={5} mt={3}>
                     <Text
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue(
                           "light.text.secondary",
                           "dark.text.secondary"
                        )}
                     >
                        Genres :
                     </Text>
                     {game.genres.map((item: any, key: number) => (
                        <Text key={key}>{item.name}</Text>
                     ))}
                  </HStack>
               </GridItem>
               <GridItem colStart={1} colEnd={3} rowStart={3} >
                  <Title>Visuels</Title>
                  <Image src={game["background_image_additional"]} alt="ok" w='100%' objectFit='cover'/>
               </GridItem>
            </Grid>
         </Container>
      </>
   );
}

export default oneGame;

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { id } = ctx.query;
   const res = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const data = await res.json();

   return {
      props: { game: data },
   };
};
