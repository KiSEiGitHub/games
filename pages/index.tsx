import { getServerSideProps } from "./api/hello";

function Home({ games }: any) {
  const { results } = games;
  console.log(results);

  return (
    <div>

    </div>
  );
} 

export default Home;
export { getServerSideProps };
