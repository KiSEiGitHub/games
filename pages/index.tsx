import { Heading } from "@chakra-ui/react";
import { getServerSideProps } from "./api/hello";

function Home({ games }: any) {
  const { results } = games;
  console.log(results);

  return (
    <div>
      <Heading size='2xl'>ok</Heading>
    </div>
  );
}

export default Home;
export { getServerSideProps };
