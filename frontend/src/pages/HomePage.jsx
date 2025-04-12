import React from 'react'
import { Container, Text, VStack } from '@chakra-ui/react'
import {Link} from "react-router-dom";
const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text 
        fontSize={30}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        textAlign={"center"}
        >
          Current Product 🚀
        </Text>

        <Text 
        fontSize="xl"
        fontWeight={"bold"}
        color={"gray.500"}
        textAlign={"center"}
        >
         No Product Found 😰 {" "}
        <Link to={"/create"}>
        <Text 
        as={'span'}
        fontWeight={"bold"}
        color={'blue.500'}
        _hover={{textDecor:"underline"}}
        >
          Create a Product
        </Text>
        </Link>
        </Text>
      </VStack>

    </Container>
  )
}

export default HomePage