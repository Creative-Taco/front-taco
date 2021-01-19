import styled from 'styled-components';
// import { devices } from '../../styles/index.style'

const About = {};

About.Container = styled.div`
  height: 600px;
  margin: 130px 44px 44px;
`;

About.BlueBox = styled.div`
  background-color: #002a73;
  width: 100%;
  height: 100%;
`;

About.Bold = styled.span`
  color: #F56B00;
  font-weight: bold;
`;

About.TacoMask = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

About.TextContainer = styled.div`
  position: absolute;
  top: 1030px;
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
