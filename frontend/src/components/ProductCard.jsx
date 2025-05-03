import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const ProductCard = (product) => {
  console.log(product,'ppppppppppppppp')
  const textColor = useColorModeValue("gray.600","gray.200");
  const bg = useColorModeValue("white","gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure()
 const {deleteProduct} = useProductStore();
 const toast = useToast();
 const [updatedProduct, setUpdatedProduct] = useState(product);
  const handleDeleteProduct = async (pid) => {
const {success,message} = await deleteProduct(pid);
if(!success){
  toast({
    title:'Error',
    description:message,
    status:'error',
    duration:3000,
    isClosable:true,
  })
} else {
  toast({
    title:'Success',
    description:message,
    status:'success',
    duration:3000,
    isClosable:true
  })
}
  }
  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3sec'
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={product.product.image} alt={product.product.name} h={48} w={'full'} objectFit={'cover'} />
      <Box
        p={4}
      >
        <Heading as={'h3'} size={'md'} mb={2}>{product.product.name}</Heading>
        <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>{product.product.price}</Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon/>} onClick={onOpen} colorScheme='blue' />
          <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteProduct(product.product._id)}  colorScheme='red' />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Input placeholder='Product Name' name='name' value={updatedProduct.product.name}/>
              <Input placeholder='Product Price' name='price' value={updatedProduct.product.price}/>
              <Input placeholder='Product Image' name='image' value={updatedProduct.product.image}/>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Update
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ProductCard