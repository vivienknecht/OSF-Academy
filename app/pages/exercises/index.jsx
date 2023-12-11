import React from "react";
import { Container, Heading, Text } from '@chakra-ui/react';
import { Input, Stack, Button, Box } from '@chakra-ui/react'
import { useState, useEffect } from "react";

function Exercises() {

    const api = {
        key: "29557f1addb64f330f64d25940367ae1a",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = () => {
        fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok.');
                }
                return res.json();
            })
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
            });
    };

    return (<>
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <Container height="100vh">
                <Heading mt="10px" mb="10px">Weather app</Heading>
                <Stack direction='row' mt="5px" mb="10px">
                    <Box w="300px">
                        <Input onChange={e => setQuery(e.target.value)}
                            value={query}
                            placeholder='Search'
                        />
                    </Box>
                    <Box w="70px">
                        <Button onClick={search}>Search</Button>
                    </Box>
                </Stack>
                {
    weather && weather.main && (
        <Box>
            <Box>
                <Text>{Math.round(weather.main.temp)}</Text>
            </Box>
            <Box>
                <Text>{weather.name}, {weather.sys.country}</Text>
            </Box>
            <Box>
                <div className="weather">{weather.weather[0].main}</div>
            </Box>
        </Box>
    )
}
            </Container>
        </div>
    </>)
}

export default Exercises;