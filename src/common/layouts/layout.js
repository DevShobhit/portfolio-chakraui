import React from 'react'
import { useState, useEffect } from 'react'

import Navbar from '../components/navbar'
import Hero from './hero'
import Contact from './contact/contact'
import Footer from './footer'
import About from './about'
import Projects from './projects'
import { Box, useColorModeValue } from '@chakra-ui/react'

function Layout() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const gradientStyle = {
    background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    width: '100vw',
    height: '100vh',
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Box
      bg={useColorModeValue(
        'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        `radial-gradient(600px at ${x}px ${y}px, rgba(20, 60, 10, 0.15), transparent 80%)`
        // '#121212'
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
