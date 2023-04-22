import React from 'react'
import Navbar from '../components/navbar'
import Hero from './hero'
import Contact from './contact/contact'
import Footer from './footer'
import About from './about'
import Projects from './projects'
import { Box, useColorModeValue } from '@chakra-ui/react'

function Layout() {
  return (
    <Box
      bg={useColorModeValue(
        'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        '#121212'
      )}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  )
}

export default Layout
