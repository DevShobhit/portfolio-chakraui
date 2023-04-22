import { ChakraProvider } from '@chakra-ui/react'
import Layout from './common/layouts/layout'

function App() {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  )
}

export default App
