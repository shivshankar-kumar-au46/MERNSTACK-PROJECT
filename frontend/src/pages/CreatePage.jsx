import React, { useState } from 'react'
import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import { useProductStore } from '../store/product'
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: ""
  })
  const toast = useToast();
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("success:", success)
    console.log("message:", message)

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      }
      )
    }
    setNewProduct({ name: "", image: "", price: "" })
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}

        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              value={newProduct.name}
              name='name'
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder='Price'
              value={newProduct.price}
              name='price'
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder='Product Image'
              value={newProduct.image}
              name='image'
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button colorScheme='blue' onClick={handleAddProduct}>Add Product</Button>
          </VStack>
        </Box>

      </VStack>

    </Container>
  )
}

export default CreatePage