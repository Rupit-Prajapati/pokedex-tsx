import { Box, Card, Flex, Image, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import React from 'react'

const SinglePokemonLoading = () => {
  return (
    <Flex border={'2px solid #000'}
      width={{ base: "300px", sm: "calc(50% - 8px)", md: "calc(33% - 10px)", lg: "calc(25% - 10px)", xl: "calc(20% - 12px)" }}
      direction={'column'}
      alignItems={'center'}
      gap={4}
      overflow='hidden'
      padding={'20px'}
      background={'linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27))'}
      boxShadow={'0 3px 10px #A0AEC0'}
      transition={'all 0.2s ease-in-out'}
      borderRadius={10}
    >
      <SkeletonCircle size={'auto'}>
        <Flex height={'150px'} width={'150px'} background={'linear-gradient(to bottom,rgba(214, 214, 214, 0.3),rgba(77, 77, 77, 0.1))'} boxShadow={'0 0 10px 10px rgba(202, 201, 201, 0.05)'} borderRadius={'50%'} justifyContent={'center'} alignItems={'center'}>
          < Image
            width={'120px'}
            height={'120px'}
            objectFit='contain'
            src={"src"}
            alt={"name"}
          />
        </Flex>
      </SkeletonCircle>
      <Skeleton>
        <Text as='b' fontSize={18} color={"#fff"}>Pokemon Name</Text>
      </Skeleton>
      <Flex gap={5}>
        <Skeleton>
          <Box textAlign={'center'}>
            <Text fontSize={14} color={"#fff"} opacity={0.5}>Weight</Text>
            <Text as='b' fontSize={14} color={"#fff"}>10kg</Text>
          </Box>
        </Skeleton>
        <Skeleton>
          <Box textAlign={'center'}>
            <Text fontSize={14} color={"#fff"} opacity={0.5}>Height</Text>
            <Text as='b' fontSize={14} color={"#fff"}>3ft</Text>
          </Box>
        </Skeleton>
      </Flex>
      <Skeleton>
        <Flex gap={1}>
          <Text fontSize={14} color="#fff" opacity={0.5}>
            Type:
          </Text>
          <Text as="b" fontSize={14} color="#fff">
            Water/Fire
          </Text>
        </Flex>
      </Skeleton>
    </Flex>
  )
}

export default SinglePokemonLoading