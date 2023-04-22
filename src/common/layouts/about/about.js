import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
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
        p={5}
        color={'gray.500'}
        fontSize={['md', 'xl']}
        lineHeight={[1.8, 2]}
        my={10}
      >
        <Text>
          Hello, I’m <b>Shobhit</b> and I currently enjoy building web
          applications.
        </Text>
        <Text>
          I’ve been constantly honing my skills in development and production
          building products for the web.
        </Text>
        <Text>
          My Goal as a developer is to craft elegant and functional user
          interfaces that enhance the user experience.
        </Text>
        <Text>
          With experience in both Front-end and Backend Development, I'm able to
          deliever end-to-end solutions.
        </Text>
        <Text>
          Depending on the team, resources and deliverables I can wear differnet
          hats - holding titles like Fullstack developer, Front-end Developer,
          Backend-Developer, Cloud Developer.
        </Text>
        <Text>
          Recently, earned Azure Devolper Associate and Devops Engineer Expert
          Certifications.
        </Text>
        <Box my={2}>
          <Text>
            Here are few technologies I've been working with recently:
          </Text>
          <SimpleGrid columns={2} spacing={2} fontSize={'md'}>
            <Text>▹ Javascript (ES6+)</Text>
            <Text>▹ React.js</Text>
            <Text>▹ Node.js</Text>
            <Text>▹ Git</Text>
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
