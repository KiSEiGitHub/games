import { Paragraphe, Title } from "@/typographie/typo";
import {
   AspectRatio,
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
   Tooltip,
   useColorModeValue,
} from "@chakra-ui/react";
import { GoFlame } from "react-icons/go";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function oneGame({ game, trailers, screen, achvievement }: any) {
   console.log(game);

   return (
      <>
         <Box
            maxW="100%"
            bgImage={game["background_image"]}
            bgAttachment="fixed"
            bgSize="cover"
            bgPos="center"
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
               mb={10}
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
                  <Title textAlign="center" color="#fff" mb={3} mt={3}>
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
                     <Text textAlign="center" color="#fff">
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
               <GridItem colStart={1} colEnd={3} rowStart={3}>
                  <Title mb={4}>Visuels</Title>
                  {trailers.results.length > 1 && (
                     <AspectRatio
                        maxW="100%"
                        h="500px"
                        ratio={16 / 9}
                        borderRadius="lg"
                     >
                        <iframe
                           src={trailers.results[0].data.max}
                           style={{ objectFit: "cover" }}
                           allowFullScreen
                           width="100%"
                        />
                     </AspectRatio>
                  )}

                  <Box mt={5}>
                     <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                           delay: 2500,
                           disableOnInteraction: false,
                        }}
                        pagination={{
                           clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                     >
                        {screen.results.map((item: any, key: number) => (
                           <SwiperSlide key={key}>
                              <Image
                                 key={key}
                                 src={item.image}
                                 alt="ok"
                                 borderRadius="lg"
                              />
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </Box>
                  <Box mt={10}>
                     <Title id="#more">Description</Title>
                     <Paragraphe mt={3} textAlign="justify">
                        {game["description_raw"]}
                     </Paragraphe>
                  </Box>
               </GridItem>
               <GridItem>
                  <Title>Configuration minimal</Title>
                  <Paragraphe mt={3} textAlign="justify">
                     {game.platforms[0].requirements.minimum}
                  </Paragraphe>
               </GridItem>
               <GridItem>
                  <Title>Configuration recommended</Title>
                  <Paragraphe mt={3} textAlign="justify">
                     {game.platforms[0].requirements.recommended}
                  </Paragraphe>
               </GridItem>
               <GridItem colStart={1} colEnd={3}>
                  <Title>Achievements</Title>
                  <Flex flexWrap="wrap" gap={5} mt={3}>
                     {achvievement.results.map((item: any, key: number) => (
                        <Tooltip key={key} label={item.name} placement='top'>
                           <Image
                              src={item.image}
                              borderRadius="lg"
                              alt="ok"
                              w="190px"
                           />
                        </Tooltip>
                     ))}
                  </Flex>
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

   // trailers
   const resT = await fetch(
      `https://api.rawg.io/api/games/${id}/movies?key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const dataT = await resT.json();

   // additionnal screenshot
   const resS = await fetch(
      `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const dataS = await resS.json();

   const resAc = await fetch(
      `https://api.rawg.io/api/games/${id}/achievements?key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const dataAc = await resAc.json();

   return {
      props: {
         game: data,
         trailers: dataT,
         screen: dataS,
         achvievement: dataAc,
      },
   };
};
