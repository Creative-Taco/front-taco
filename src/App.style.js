import styled from 'styled-components';
// import {useSpring, animated} from 'react-spring';

const Section = {};

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

Section.Container = styled.main`
    margin: 90px 48px 0;
    background: #fff;
    height: 80vh;

    @media ${device.tablet} {
        margin: 90px 24px 24px;
    }

    @media ${device.mobileL} {
        margin: 0;
    }

`;

Section.TacoIcon = styled.img`
    position: absolute;
    top 3.5%;
    left: 6.7%;
`;

Section.ScrollDownText = styled.p`
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

Section.ScrollDownImage = styled.img`
    position: absolute;
    left: 63px;
    top: 73.5%;
`; 

Section.HeroContainer = styled.div`
    height: 100%;
`; 

Section.HeroText = styled.div`
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
    @media ${device.tablet} {
        top: 55%;
        font-size: 100px;
    }
`;

Section.HeroFullStop = styled.span`
    color: #002A73;
`;

Section.BlueBox = styled.div`
    background-color: #002A73;
    width: 50%; 
    height: 100%;
`;

Section.TacoMask = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover
`;
export default Section;