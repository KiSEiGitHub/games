import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();

    return {
        props: {
            games: data,
        },
    };
};
