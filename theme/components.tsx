import { colors } from "./colors";
import { mode } from "@chakra-ui/theme-tools";

const { dark, light } = colors;

export const components = {
    Heading: {
        baseStyle: {
            fontFamily: "Poppins",
        },
        variants: {
            title: (props: any) => ({
                fontSize: "27px",
                colors: mode(light.text.primary, dark.text.primary)(props),
            }),
        },
    },
};
