import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Container,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Logo from '../../../assets/logo'

import GithubIcon from '../../../assets/githubIcon'
import LinkedInIcon from '../../../assets/linkedInIcon'
import MediumIcon from '../../../assets/medium'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      maxW={'7xl'}
      bg={useColorModeValue(
        'linear-gradient(120deg, #fefefe 0%, #eeeeee 100%)',
        '#111'
      )}
      rounded={'lg'}
    >
      <Box zIndex='50' maxW={'7xl'}>
        <Flex h={16} wrap={'wrap'} align={'center'} justify={'space-between'}>
          <Box mx={'5'}>
            <Logo />
          </Box>

          <Flex gap='10'>
            <Flex alignItems={'center'} gap={'5'}>
              <Link href='https://github.com/devshobhit'>
                <GithubIcon height={'clamp(15px,2.5vw,20px)'} />
              </Link>
              <Link href='https://linkedin.com/in/devshobhit'>
                <LinkedInIcon height={'clamp(15px,2.5vw,20px)'} />
              </Link>
              <Link href='https://devshobhit.medium.com'>
                <MediumIcon height={'clamp(15px,2.5vw,20px)'} />
              </Link>
            </Flex>

            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
