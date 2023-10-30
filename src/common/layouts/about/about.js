import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import MailButton from '../../components/buttons'

export default function About() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Heading
        textAlign={'center'}
        mb='20'
        textTransform={'uppercase'}
        className='heading'
        position={'relative'}
        zIndex={2}
        _after={{
          color: useColorModeValue('#eee', '#222222'),
          fontSize: ['3rem', '3.2rem', '4.2rem'],
          position: 'absolute',
          fontWeight: 600,
          zIndex: -1,
          top: ['-35%', '-52%'],
          left: ['18%', '20%', '32%'],
          content: `'ABOUT ME'`,
        }}
        my={3}
      >
        About Me
      </Heading>
      <Box
        spacing={4}
        bgGradient={useColorModeValue(
          'linear(120deg, #fefefe 0%, #eeeeee 100%)',
          'linear(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'
        )}
        rounded='lg'
        p={10}
        color={'gray.500'}
        fontSize={['md', 'xl']}
        lineHeight={[1.8, 2]}
        my={10}
      >
        <Box my={2}>
          <Text> Enthusiastic Developer building Web Applications.</Text>
          <Text>
            Here are few technologies I've been working with recently:
          </Text>
          <SimpleGrid columns={2} spacing={2} fontSize={'md'}>
            <Text>▹ Typescript</Text>
            <Text>▹ React.js</Text>
            <Text>▹ Node.js</Text>
            <Text>▹ Azure</Text>
          </SimpleGrid>
        </Box>
        <Text>Have an interesting project or opportunity?</Text>
        <Box textAlign={'center'}>
          <MailButton>Let's Talk</MailButton>
        </Box>
      </Box>
    </Container>
  )
}
