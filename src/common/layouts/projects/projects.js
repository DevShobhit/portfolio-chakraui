import Project from './project'
import OtherProject from './otherproject'
import { Box, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { projects, otherprojects } from './projectsdata'

function Projects() {
  return (
    <Box>
      <Heading
        mt='20'
        textAlign={'center'}
        mb='10'
        textTransform={'uppercase'}
        position={'relative'}
        zIndex={2}
        _after={{
          color: useColorModeValue('#eee', '#222222'),
          fontSize: ['3rem', '3.2rem', '4.2rem'],
          fontWeight: 600,
          zIndex: -1,
          position: 'absolute',
          top: ['-35%', '-52%'],
          left: ['22%', '30%', '40%'],
          content: `'Projects'`,
        }}
      >
        Projects
      </Heading>

      {projects.map((project, idx) => {
        return (
          <React.Fragment key={idx}>
            <Project project={project} projectnum={idx + 1} />
          </React.Fragment>
        )
      })}

      <Box p={10}>
        <Box textAlign='center' fontSize={'5xl'} mb={'100px'}>
          Other Projects
        </Box>

        <SimpleGrid columns={[1, 1, 1, 2, 3]} gap={5}>
          {otherprojects.map((project, idx) => {
            return (
              <React.Fragment key={idx}>
                <OtherProject project={project} />
              </React.Fragment>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Projects
