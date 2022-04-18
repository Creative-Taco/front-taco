import styled from 'styled-components';
import { devices } from '../../styles/index.style';
// import longTacoMask from '../../images/tacomask-long.png';
import longTacoMask from '../../images/taco-light.png';

const Hello = {};

Hello.Container = styled.div`
  margin: 0px 42px;
  background: #fff;
  width: 100%;
  overflow-y: hidden;
  height: 200vh;
  @media only screen and ${devices.mobileL} {
    margin: 0px;
  }
`;

Hello.Wrapper = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  height: 100%;
`;

Hello.Hero = styled.div`
  ${({ $isAtTop, $isPassed }) =>
    $isAtTop
      ? `
        left: 30%;
      `
      : $isPassed
      ? `
        left: 80%;
        opacity: 0;
      `
      : `
        left: 80%;
        opacity: 0;
      `};
  transition: left cubic-bezier(0.28, -0.4, 0.19, 1.21) 1s, opacity ease-in 0.3s;
  transform: translateY(-50%);
  top: 50%;
  position: fixed;
  max-width: 758px;
  z-index: 99;
  overflow-wrap: break-word;
  @media only screen and ${devices.mobileL} {
    transform: translateY(calc(-50% + 42px));
    ${({ $isAtTop, $touchScrollY }) =>
      $isAtTop || $touchScrollY < 200
        ? `
        left:20%;
        top: 50%;
      `
        : `
        left: 80%;
        opacity: 0;
      `};
  }
`;

Hello.TitleText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 200px;
  line-height: 160px;

  /* F56B00 */

  color: ${(props) => (props.reversed ? '#002a73' : '#f56b00')};
  @media only screen and ${devices.mobileL} {
    font-size: 72px;
    line-height: 160px;
  }
`;

Hello.TitleFullStop = styled.span`
  color: ${(props) => (props.reversed ? '#f56b00' : '#002a73')};
`;

Hello.BlueContainer = styled.div`
  position: absolute;
  z-index: 59;
  height: 100%;
  width: ${({ $isAtTop }) => ($isAtTop ? '50%' : '100%')};
  transition: width cubic-bezier(0.28, -0.4, 0.19, 1.21) 1s;
`;

Hello.BlueBox = styled.div`
  height: 100%;
  background-color: #002a73;
  background-image: url(${longTacoMask});
  background-size: 1400px;
`;

export default Hello;
