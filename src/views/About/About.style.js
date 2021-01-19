import styled from 'styled-components';
import tacoMask from '../../images/tacomasklarge.svg';

// import { devices } from '../../styles/index.style'

const About = {};

About.Container = styled.div`
  height: 600px;
  margin: 0 44px 44px;
`;

About.BlueBox = styled.div`
  background-color: #002a73;
  width: 100%;
  height: 100%;
  background-image: url(${tacoMask});
  background-repeat: repeat;
`;

About.Bold = styled.span`
  color: #F56B00;
  font-weight: bold;
`;

About.TextContainer = styled.div`
  position: relative;
  left: 280px;
  max-width: 500px;
`;

About.TacoLogoText = styled.img`
  margin-bottom: 50px;
`;

About.Title = styled.div`
  color: white;
  font-size: 30px;
`;

About.Subtitle = styled.div`
  color: white;
  font-size: 24px;
`;

export default About;
