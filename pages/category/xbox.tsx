import Cards from "@/components/Cards";
import { Title } from "@/typographie/typo";
import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

function Xbox({ xbox }: any) {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [tab, setTab] = useState<Array<any>>([]);

   useEffect(() => {
      if (isLoading) {
         xbox.games.forEach(async (item: any) => {
            const res = await fetch(
               `https://api.rawg.io/api/games/${item.id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
            );
            const data = await res.json();
            setTab((curr) => [...curr, data]);
            setIsLoading(false);
         });
      }
   });

   return (
      <Container maxW="7xl" mt={10}>
         <Title>xbox</Title>
         <Flex flexWrap="wrap" gap={5} mt={5}>
            {tab.map((item: any, key: number) => (
               <Box key={key}>
                  <Link href={`/games/${item.id}`}>
                     <Cards name={item.name} img={item["background_image"]} />
                  </Link>
               </Box>
            ))}
         </Flex>
      </Container>
   );
}
export default Xbox;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const res = await fetch(
      `https://api.rawg.io/api/platforms?key=${process.env.NEXT_PUBLIC_API_KEY}`
   );
   const { results } = await res.json();

   const pcArray = results.filter((word: any) => word.name === "Xbox One");

   return {
      props: { xbox: pcArray[0] },
   };
};
