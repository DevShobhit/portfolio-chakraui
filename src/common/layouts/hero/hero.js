import { Container, Box, Text, useColorModeValue } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Container maxW={'7xl'} my={20} textAlign={'center'} lineHeight={2}>
      <Box mx={'auto'}>
        <Text fontSize={['xl', '2xl', '3xl']} color={'gray.500'}>
          Hi,
        </Text>
        <Text
          fontSize={['5xl', '7xl', '9xl']}
          color={useColorModeValue('gray.700', 'gray.300')}
          letterSpacing={'wide'}
        >
          I'm Shobhit
        </Text>
        <Text
          fontSize={['3xl', '4xl', '6xl']}
          color={'gray.600'}
          letterSpacing={'wide'}
        >
          Cloud Certified Developer
        </Text>
      </Box>
    </Container>
  )
}
