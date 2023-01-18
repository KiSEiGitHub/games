import Nav from "@/components/Nav";
import { theme } from "@/theme/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Box mt="85px" maxW="100%">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
