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
                color: mode(light.text.primary, dark.text.primary)(props),
            }),
        },
    },

    Text: {
        baseStyle: {
            fontFamily: "Poppins",
        },
        variants: {
            paragraphe: (props: any) => ({
                color: mode(light.text.secondary, dark.text.secondary)(props),
            })
        }
    }
};