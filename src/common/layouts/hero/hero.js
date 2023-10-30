import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'

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
          FullStack Developer
        </Text>
      </Box>
    </Container>
  )
}

// With expertise in both MERN Stack and cloud I'm well-equipped to tackle even the most complex web development projects. Whether you're building a new web app from scratch or improving an existing one, I'll work tirelessly to deliver the results you're looking for.
