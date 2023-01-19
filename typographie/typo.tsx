import { Heading, Text } from "@chakra-ui/react";

export const Title = ({ children, ...props }: any) => (
    <Heading {...props} variant='title'>
        {children}
    </Heading>
)

export const Paragraphe = ({ children, ...props }: any) => (
    <Text {...props} variant='paragraphe'>
        {children}
    </Text>
)