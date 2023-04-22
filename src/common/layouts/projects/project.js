import {
  Box,
  Text,
  Link,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import GithubIcon from '../../../assets/githubIcon'
import ExternalIcon from '../../../assets/external'

const Project = ({ project, projectnum }) => {
  return (
    <>
      <Box
        as='main'
        maxW='2xl'
        mx={['20px', '30px', 'auto']}
        my='150px'
        p={8}
        bgGradient={useColorModeValue(
          'linear(120deg, #fefefe 0%, #eeeeee 100%)',
          'linear(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'
        )}
        color={useColorModeValue('gray.600', 'gray.400')}
        rounded='lg'
        border='1px solid rgba( 255, 255, 255, 0.18 )'
        borderWidth={2}
        _hover={{
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          color: useColorModeValue('gray.600', 'gray.200'),
        }}
      >
        <Box position={'absolute'}>
          <Box
            fontSize={'13rem'}
            fontWeight={'800'}
            display='inline-block'
            bg={useColorModeValue(
              'linear-gradient(cyan, #eee 65% ,white)',
              'linear-gradient(cyan,#222 65%,rgba(0,0,0,.2))'
            )}
            position='relative'
            bottom={['220px', '200px']}
            left={['160%', '290%', projectnum % 2 !== 0 ? '-100px' : '460%']}
            bgClip={'text'}
            color={useColorModeValue('white', '#121212')}
            text-stroke={'4px transparent'}
            css={{
              WebkitTextStroke: '4px transparent',
            }}
          >
            {projectnum}
          </Box>
        </Box>

        <Box mx='auto' mt='20px' px='30px'>
          <Text fontSize={['25px', '30px']}>{project.name}</Text>
          <br />
          {project.description}
          <br />

          <Box my={5}>
            <Text fontWeight={'600'}>Features</Text>

            {project.features.map((feature, idx) => {
              return <Text key={idx}>▹ {feature}</Text>
            })}
          </Box>

          <Stack direction='row' wrap={'wrap'} gap={2} my={4}>
            {project.techstack.map((tech, idx) => (
              <Badge variant='subtle' key={idx} colorScheme='cyan'>
                {tech}
              </Badge>
            ))}
          </Stack>
          <Stack direction='row' justify={'end'}>
            <Link href={project.links.github}>
              <GithubIcon />
            </Link>
            <Link href={project.links.website}>
              <ExternalIcon />
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Project
