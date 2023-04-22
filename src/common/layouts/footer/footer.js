import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container
      bg={useColorModeValue(
        'linear-gradient(120deg, #fefefe 0%, #eeeeee 100%)',
        'linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'
      )}
      color={useColorModeValue('gray.700', 'gray.400')}
      rounded={'xl'}
      marginTop={10}
    >
      <Box textAlign={'center'} p={5}>
        <Text>Designed and Built by Devshobhit </Text>
      </Box>
    </Container>
  )
}
