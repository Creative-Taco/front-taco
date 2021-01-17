import styled from 'styled-components';
import tacoLogo from '../../images/tacologo.svg';

const HeaderStyles = {};

HeaderStyles.TacoIcon = styled.img`
position: absolute;
top 3.5%;
left: 45px;
`;

function Header() {
  return (
    <div>
      <a href='/'><HeaderStyles.TacoIcon src={tacoLogo} alt='' /></a>
    </div>
  );
}

export default Header;
