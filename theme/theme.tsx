import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./colors";
import { config } from "./config";
import { styles } from "./styles";

export const theme = extendTheme({
  styles,
  components,
  colors,
  config,
});
