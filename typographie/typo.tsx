import { Heading } from "@chakra-ui/react";

export const Title = ({ children, ...props }: any) => (
    <Heading {...props} variant='title'>
        {children}
    </Heading>
)