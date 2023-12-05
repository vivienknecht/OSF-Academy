import React from "react";
import { Container } from '@chakra-ui/react'
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { Heading } from "../../components/shared/ui/index";

function RadioExample() {
    const [value, setValue] = React.useState('Change me');

const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <>
        {/* <Text mb="10px"> {value === 'Change me' ?'Change me' : value}</Text> */}
        <Text mb="10px"> {value === 'Change me' ?'Change me' : value}</Text>
        <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
                <Radio value='1'>First</Radio>
                <Radio value='2'>Second</Radio>
                <Radio value='3'>Third</Radio>
            </Stack>
        </RadioGroup> 
        </>
    )
  }

function Exercises() {
return(
    <>
    <Container height="100vh">
        <Heading mt="10px" mb="12px">Exercises 5</Heading>
        <RadioExample />
    </Container>
    </>
)

}

export default Exercises;