import styled from 'styled-components';
import tacoLogo from '../../images/tacologo.svg';
import { devices } from '../../styles/index.style';
const HeaderStyles = {};

HeaderStyles.Header = styled.div`
  padding: 16px 42px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 999999;
  @media only screen and ${devices.mobileL} {
    /* display: none; */
    position: static;

  }
`;
HeaderStyles.TacoIcon = styled.img`
  width: 83px;
  height: auto;
  @media only screen and ${devices.mobileL} {
    width: 64px;
  }
`;

function Header() {
  return (
    <HeaderStyles.Header>
      <HeaderStyles.TacoIcon src={tacoLogo} alt='' />
    </HeaderStyles.Header>
  );
}

export default Header;
