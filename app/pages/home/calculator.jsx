import React from 'react';
import {
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack,
    Container,
    Button,
    Box,
    Text
} from '@chakra-ui/react'



function Calculator()  {
    const [value1, setValue1] = React.useState();
    const [value2, setValue2] = React.useState();
    const [result, setResult] = React.useState();
    const [operation, setOperation] = React.useState('');
    
    const handleNumberChange1 = (value) => {
        setValue1(value);
      };
      
      const handleNumberChange2 = (value) => {
        setValue2(value);
      };


      const handleOperationChange = (event) => {
        setOperation(event.target.value);
      };

      React.useEffect(() => {
        handleCalculate();
      }, [value1, value2, operation]);

        const handleCalculate = () => {
            let CalculatedResult = 0;
            const num1 = parseInt(value1);
            const num2 = parseInt(value2);
        
            switch (operation){
                case 'add':
                    CalculatedResult = num1 + num2;
                    break;
                case 'subtract':
                    CalculatedResult = num1 - num2;
                    break;
                case 'multiply':
                    CalculatedResult = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0){
                        CalculatedResult = num1 / num2;
                    break;
                    } else {
                        CalculatedResult = 'Cannot divide by 0';
                        break;
                    }
                default:
                    CalculatedResult = 0;
                    break;
            }
            setResult(CalculatedResult)
        };

        const handleClear = () => {
            setValue1(0);
            setValue2(0);
            setResult(0);
            setOperation('')
        };
        
        return (
        <>
        <Container mt="20px">
                <Stack shouldWrapChildren direction="row">
                    <NumberInput  size='lg'
                    name="value1"
                    value={value1}
                    onChange={handleNumberChange1}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <NumberInput  size='lg'
                    name="value2"
                    value={value2}
                    onChange={handleNumberChange2}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Select placeholder='Select operation' 
                    size='lg'
                    onChange={handleOperationChange}
                    value={operation}
                    >
                        <option value="add" >+</option>
                        <option value="subtract">-</option>
                        <option value="multiply"  >*</option>
                        <option value="divide" >/</option>
                    </Select>
                    <Button onClick={handleClear} >Clear </Button>   
                    {/* <Button onClick={handleCalculate} >Calculate </Button>        */}
                      </Stack>
                      <Box mt="20px" ml="200px">
                        <Text fontSize="4xl">Result: {result} </Text>
                      </Box>

            </Container>

        </>);
    };

    export default Calculator;