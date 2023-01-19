import React from 'react'
import Icon1 from '../../images/luffy.png'
import Icon2 from '../../images/luffy.png'
import Icon3 from '../../images/luffy.png'
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP
} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Our Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
            <ProjectsIcon srs={Icon1}/>
            <ProjectsH2>Reduce expenses</ProjectsH2>
            <ProjectsP>We help reduce your fees and increase your overall revenue</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
            <ProjectsIcon srs={Icon2}/>
            <ProjectsH2>Virtual Offices</ProjectsH2>
            <ProjectsP>You can access our platform online anywhere in the world.</ProjectsP>
        </ProjectsCard>        <ProjectsCard>
            <ProjectsIcon srs={Icon3}/>
            <ProjectsH2>Premium Benefitss</ProjectsH2>
            <ProjectsP>Unlock our special membership card that returns 5% cash back</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
