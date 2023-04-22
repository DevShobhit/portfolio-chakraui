import { Text, Container } from '@chakra-ui/react'
import MailButton from '../../components/buttons'

const Contact = () => {
  return (
    <>
      <Container maxW={'7xl'} mt={2} mb={20} textAlign={'center'}>
        <Text my={6} fontSize={'4xl'}>
          Get In Touch
        </Text>

        <Text my={5} color={'gray.600'}>
          Have any intersting project idea or opportunity
        </Text>

        <MailButton>Say Hello</MailButton>
      </Container>
    </>
  )
}

export default Contact
