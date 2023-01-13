import React from 'react'
import Icon1 from '../../images/luffy.png'
import Icon2 from '../../images/luffy.png'
import Icon3 from '../../images/luffy.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon srs={Icon1}/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon srs={Icon2}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
        </ServicesCard>        <ServicesCard>
            <ServicesIcon srs={Icon3}/>
            <ServicesH2>Premium Benefitss</ServicesH2>
            <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
