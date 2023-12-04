import React from 'react';
import { AspectRatio, Container } from "@chakra-ui/react";

function YouTube() {
    return (<>
        <Container>
            <AspectRatio mt="10" maxw="980px" ratio={4 / 3}>
        <iframe
         src="https://www.youtube.com/embed/nh_NaMZKM0c"
         title="OSF"
         allowFullScreen
        ></iframe>
        </AspectRatio>
        </Container>
    </>)
}

export default YouTube;