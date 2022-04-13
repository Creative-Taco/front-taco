import styled from 'styled-components';
import { devices } from '../../styles/index.style';

const Frame = {};

Frame.Top = styled.div`
  background: #fff;
  position: fixed;
  z-index: 9999;
  left: 0;
  right: 0;
  height: 44px;
  top: 0;
  z-index: 5;
  @media only screen and ${devices.mobileL} {
    height: 0px;
    display: none;
  }
`;
Frame.Bottom = styled.div`
  background: #fff;
  position: fixed;
  z-index: 9999;
  left: 0;
  right: 0;
  height: 44px;
  bottom: 0;
  z-index: 9999;
  @media only screen and ${devices.mobileL} {
    height: 0px;
    display: none;
  }
`;
Frame.Left = styled.div`
  background: #fff;
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  width: 44px;
  left: 0;
  z-index: 9999;
  @media only screen and ${devices.mobileL} {
    width: 0px;
    display: none;
  }
`;
Frame.Right = styled.div`
  background: #fff;
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  width: 44px;
  right: 0;
  z-index: 9999;
  @media only screen and ${devices.mobileL} {
    width: 0px;
    display: none;
  }
`;

export default Frame;
