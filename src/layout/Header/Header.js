import styled from 'styled-components';
import tacoLogo from '../../images/tacologo.svg';
import {devices} from '../../styles/index.style';
const HeaderStyles = {};

HeaderStyles.Header = styled.div`
  padding: 16px 42px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;

  @media only screen and ${devices.tablet} {
    display: none;
  }
`;
HeaderStyles.TacoIcon = styled.img``;

function Header() {
  return (
    <HeaderStyles.Header>
      <div>
        <a href='/'>
          <HeaderStyles.TacoIcon src={tacoLogo} alt='' />
        </a>
      </div>
    </HeaderStyles.Header>
  );
}

export default Header;
