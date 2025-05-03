import React, { useEffect } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
const HomePage = () => {
  const { fetchProduct,products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct])
  console.log(products)

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
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >
          {
            products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))
          }
        </SimpleGrid>
    {
      products.length === 0 && (
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
            _hover={{ textDecor: "underline" }}
          >
            Create a Product
          </Text>
        </Link>
      </Text>
      )
    }
      </VStack>

    </Container>
  )
}

export default HomePage