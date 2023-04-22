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

const OtherProject = ({ project }) => {
  return (
    <>
      <Box
        as='main'
        maxW='2xl'
        mx='auto'
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
        <Box mx='auto' px='30px'>
          <Text fontSize={['25px', '30px']}>{project.name}</Text>
          <br />
          {project.description}
          <br />

          <Stack direction='row' wrap={'wrap'} gap={2} my={4}>
            {project.techstack.map((tech, idx) => (
              <Badge variant='subtle' key={idx} colorScheme='cyan'>
                {tech}
              </Badge>
            ))}
          </Stack>
        </Box>
        <Stack direction='row' justify={'end'}>
          <Link href={project.links.github}>
            <GithubIcon />
          </Link>
          <Link href={project.links.website}>
            <ExternalIcon />
          </Link>
        </Stack>
      </Box>
    </>
  )
}

export default OtherProject
