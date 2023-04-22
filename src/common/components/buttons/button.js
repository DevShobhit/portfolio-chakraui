import { Button, Link, useColorModeValue } from '@chakra-ui/react'

const MailButton = ({ children }) => {
  return (
    <Button
      as={Link}
      href={`mailto:shobhitdev936@gmail.com`}
      bg={useColorModeValue(
        'linear-gradient(120deg, #fefefe 0%, #eeeeee 100%)',
        'linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'
      )}
      border='1px solid rgba( 255, 255, 255, 0.18 )'
      borderWidth={2}
      _hover={{
        textDecor: 'none',
        boxShadow: '0 6px 12px 0 rgba( 31, 38, 135, 0.37 )',
        color: useColorModeValue('gray.600', 'gray.200'),
      }}
      px={7}
      py={2}
    >
      {children}
    </Button>
  )
}

export default MailButton
