import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";

const { light, dark } = colors;

export const styles = {
  global: (props: any) => ({
    body: {
      bg: mode(light.primary, dark.primary)(props)
    },
  }),
};
