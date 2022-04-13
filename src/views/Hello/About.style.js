import styled from 'styled-components';
import { devices } from '../../styles/index.style';

const About = {};

About.Bold = styled.span`
  color: #f56b00;
  font-weight: bold;
`;

About.TextContainer = styled.div`
  ${({ $isAtTop, $isComplete }) => ($isAtTop || $isComplete ? `opacity: 0;` : `opacity: 1;`)};
  transition: opacity ease-in 0.3s;
  position: fixed;
  z-index: 99;
    top: 50%;
    transform: translateY(-50%);

  left: 280px;
  max-width: 500px;
  @media only screen and ${devices.mobileL} {
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    width: 80%;
  }
  
`;

About.TacoLogoText = styled.img`
  margin-bottom: 50px;
  @media only screen and ${devices.mobileL} {
    width: 180px;
  }
`;

About.Title = styled.div`
  color: white;
  font-size: 30px;
  @media only screen and ${devices.mobileL} {
    font-size: 24px;
  }
`;

About.Subtitle = styled.div`
  color: white;
  font-size: 24px;
  @media only screen and ${devices.mobileL} {
    font-size: 18px;
  }
`;

export default About;
