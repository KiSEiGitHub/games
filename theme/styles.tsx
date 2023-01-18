import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#fff", "#000")(props),
    },
  }),
};
