import arrowDown from '../../images/arrowdown.svg';
import styled from 'styled-components';

function ScrollDown() {
  const Scroll = {};

  Scroll.ScrollDownText = styled.p`
    position: fixed;
    width: 64px;
    height: 11px;
    left: 36px;
    top: 610px;

    font-family: Montserrat, Verdana, sans-script;
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 12px;
    letter-spacing: 0.1em;

    color: #fff;
    transform: rotate(-90deg);
  `;

  Scroll.ScrollDownImage = styled.img`
    position: fixed;
    left: 64px;
    top: 670px;
  `;
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
