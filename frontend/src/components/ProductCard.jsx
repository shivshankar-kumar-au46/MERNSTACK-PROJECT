import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

const ProductCard = (product) => {
  console.log("product", product)
  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3sec'
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image src={product.product.image} alt={product.product.name} h={48} w={'full'} objectFit={'cover'} />
      <Box
        p={4}
      >
        <Heading as={'h3'} size={'md'} mb={2}>{product.product.name}</Heading>
        <Text fontWeight={'bold'} fontSize={'xl'} color={""} mb={4}>{product.product.price}</Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon/>} colorScheme='blue' />
          <IconButton icon={<DeleteIcon/>}  colorScheme='red' />
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard