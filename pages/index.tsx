import Cards from "@/components/Cards";
import { Title } from "@/typographie/typo";
import { Box, Button, Container, Flex, Heading, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Home() {
   const [page, setPage] = useState<number>(1);
   const [game, setGame] = useState<Array<any>>([]);
   const [Loading, setLoading] = useState<boolean>(true);

   const getGames = async () => {
      setLoading(true)
      window.scrollTo(0, 0);
      const res = await fetch(
         `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`
      );
      const { results } = await res.json();

      setGame(results);
      setLoading(false);
   };

   console.log(game);

   useEffect(() => {
      getGames();
   }, [page]);

   if (Loading) {
      return (
         <>
            <Heading>Chargement</Heading>
         </>
      );
   }

   return (
      <Container maxW="7xl" mt={10}>
         <Title mb={3}>Tendances</Title>
         <Flex flexWrap="wrap" gap={5} mb={3}>
            {game.map((item: any, key: number) => (
               <Box key={key}>
                  <Link
                     href={`/games/${item.id}`}
                     _hover={{ textDecoration: "none" }}
                  >
                     <Cards name={item.name} img={item["background_image"]} />
                  </Link>
               </Box>
            ))}
         </Flex>

         <Button
            mx="auto"
            my={5}
            display="block"
            onClick={() => setPage(page + 1)}
         >
            Load more
         </Button>
      </Container>
   );
}

export default Home;
