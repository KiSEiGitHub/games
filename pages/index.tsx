import Cards from "@/components/Cards";
import { Title } from "@/typographie/typo";
import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { getServerSideProps } from "./api/hello";

function Home({ games }: any) {
   const { results } = games;
   console.log(results);

   return (
      <Container maxW="7xl" mt={10}>
         <Title mb={3}>Tendances</Title>
         <Flex flexWrap="wrap" gap={5} mb={3}>
            {results.map((item: any, key: number) => (
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
      </Container>
   );
}

export default Home;
export { getServerSideProps };
