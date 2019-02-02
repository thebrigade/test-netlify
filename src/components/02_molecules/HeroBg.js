import React from 'react';
import styled from 'styled-components';

import bgHero from '../../images/bg-hero.jpg';

import bgCircle1 from '../../images/bg-circle_01.png';
import bgCircle2 from '../../images/bg-circle_02.png';
import bgCircle3 from '../../images/bg-circle_03.png';
import bgCircle4 from '../../images/bg-circle_04.png';


const StyledBgContainer = styled.div`
  position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 1000px;
	min-height: 738px;
	overflow-x: hidden;
	@media screen and (min-width: 768px) {
		height: 1200px;
	}
`;

const StyledBgImage = styled.img`
  position: absolute;
	top: 0;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
	height: 100%;
	min-height: 738px;
  z-index: 1;
`;

const HeroBg = (props) => {
  return (
    <StyledBgContainer>
			<StyledBgImage className="bg fadeIn delay-500" src={bgHero} alt="background"/>
			<StyledBgImage className="bg-circle bg-circle_01" src={bgCircle1} alt="circle-1"/>
			<StyledBgImage className="bg-circle bg-circle_02" src={bgCircle2} alt="circle-2"/>
			<StyledBgImage className="bg-circle bg-circle_03" src={bgCircle3} alt="circle-3"/>
			<StyledBgImage className="bg-circle bg-circle_04" src={bgCircle4} alt="circle-4"/>
		</StyledBgContainer>
  )
}


export default HeroBg;