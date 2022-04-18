import styled from 'styled-components';

import arrowDown from '../../images/arrowdown.svg';
import { devices } from '../../styles/index.style';

const Scroll = {};

  Scroll.ScrollDownText = styled.p`
    position: fixed;
    z-index: 999999;
    width: 64px;
    height: 11px;
    left: 36px;
    top: 610px;
    margin: 0;
    font-family: Montserrat, Verdana, sans-script;
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 12px;
    letter-spacing: 0.1em;

    color: #fff;
    transform: rotate(-90deg);

    @media only screen and ${devices.tablet} {
      left: -12px;
      top: 80%;
    }
  `;

  Scroll.ScrollDownImage = styled.img`
    position: fixed;
    z-index: 999999;
    left: 64px;
    top: 670px;
    margin: 0;
    
    @media only screen and ${devices.tablet} {
      left: 16px;
      top: calc(80% + 48px);
    }
  `;

function ScrollDown() {
  return (
    <div>
      <Scroll.ScrollDownText>SCROLL</Scroll.ScrollDownText>
      <Scroll.ScrollDownImage
        src={arrowDown}
        alt='Example design of application'
      />
    </div>
  );
}

export default ScrollDown;
