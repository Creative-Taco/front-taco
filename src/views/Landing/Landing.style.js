import styled from 'styled-components';
import { devices, sizes} from '../../styles/index.style' 
// import {useSpring, animated} from 'react-spring';

const Landing = {};

Landing.Container = styled.main`
    margin: 90px 48px 0;
    background: #fff;
    height: 80vh;

    @media ${devices.tablet} {
        margin: 90px 24px 24px;
    }

    @media ${devices.mobileL} {
        margin: 0;
    }

`;

Landing.ScrollDownText = styled.p`
    position: absolute;
    width: 64px;
    height: 11px;
    left: 34px;
    top: 620px;

    font-family: Montserrat, Verdana, sans-script;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.06em;

    color: #fff;
    transform: rotate(-90deg);
`;

Landing.ScrollDownImage = styled.img`
    position: absolute;
    left: 63px;
    top: 73.5%;
`; 

Landing.HeroContainer = styled.div`
    height: 100%;
`; 

Landing.HeroText = styled.div`
    position: absolute;
    width: 758px;
    height: 208px;
    left: 25%;
    top: 55%;

    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 200px;
    line-height: 300px;

    /* F56B00 */

    color: #F56B00;
    @media ${devices.tablet} {
        top: 55%;
        font-size: 100px;
    }
`;

Landing.HeroFullStop = styled.span`
    color: #002A73;
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