import styled from 'styled-components';
import { devices } from '../../styles/index.style' 
// import {useSpring, animated} from 'react-spring';

const Landing = {};

Landing.Container = styled.main`
    margin: 92px 44px 0;
    background: #fff;
    height: 80vh;

    @media ${devices.tablet} {
        margin: 90px 24px 24px;
    }

    @media ${devices.mobileL} {
        margin: 0;
    }

`;

Landing.HeroContainer = styled.div`
    height: 625px;
`; 

Landing.HeroText = styled.div`
    position: absolute;
    width: 758px;
    height: 208px;
    left: 365px;
    top: 385px;

    @media ${devices.tablet} {
        top: 55%;
        font-size: 100px;
    }
`;

Landing.BlueBox = styled.div`
    background-color: #002A73;
    width: 50%; 
    height: 100%;
`;

Landing.TacoMask = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover
`;
export default Landing;