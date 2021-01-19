import styled from 'styled-components';
import { devices } from '../../styles/index.style';
import tacoMask from '../../images/tacomasklarge.svg';
import {animated} from 'react-spring'

// import {useSpring, animated} from 'react-spring';

const Hello = {};

Hello.Container = styled(animated.div)`
  margin: 44px 42px 0;
  background: #fff;
  width: 50%;
  height: 130vh;
  
  @media ${devices.tablet} {
    margin: 0;
    height: 100vh;
  }
`;

Hello.Hero = styled.div``;

Hello.HeroText = styled(animated.div)`
  position: fixed;
  max-width: 758px;
  height: 208px;
  left: 30%;
  top: 50%;

  @media ${devices.laptopM} {
    div {
      font-size: 150px;
    }
  }

  @media ${devices.laptop} {
    div {
      font-size: 120px;
    }
  }

  @media ${devices.tablet} {
    div {
      font-size: 80px;
    }
  }

  @media ${devices.mobileL} {
    div {
      font-size: 60px;
    }
  }
`;

Hello.BlueBox = styled.div`
  background-color: #002a73;
  height: 130vh;
  width: 100%;
  background-image: url(${tacoMask});
  background-repeat: repeat;
  
  @media ${devices.tablet} {
    height: 100vh;
  }
`;

export default Hello;
