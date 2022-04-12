import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';
import { devices } from '../../styles/index.style';
import About from './About.style';
import logoText from '../../images/logotext.png';
import Hello from './Hello.style';
import HeroText from '../../components/TitleText';
import useScroll from '../../utils/useScroll';
import useMedia from '../../utils/useMedia';

function HelloView() {
  const { scrollY } = useScroll();

  const titleTop = useMedia(
    [devices.mobileL, devices.tablet, devices.laptop],
    ['10%', '30%', '50%'],
    '50%'
  );
  const titleLeft = useMedia(
    [devices.mobileL, devices.tablet, devices.laptop],
    ['20%', '25%', '30%'],
    '30%'
  );
  console.log('titleTop titleLeft', titleTop, titleLeft);

  const [containerProps, setContainer] = useSpring(() => ({ width: '50%' }));
  const [titleProps, setTitle] = useSpring(() =>
    scrollY > 100
      ? { opacity: 0, left: '100%' }
      : { opacity: 1, left: titleLeft, top: titleTop }
  );
  const [aboutProps, setAbout] = useSpring(() =>
    scrollY > 100 ? { opacity: 1, top: '33%' } : { opacity: 0, top: '20%' }
  );

  useEffect(() => {
    console.log('test', scrollY);
    if (scrollY > 100) {
      setContainer({ width: '100%' });
      setTitle({ opacity: 0, left: '100%' });
      setAbout({ opacity: 1, top: '33%' });
    }
    if (scrollY <= 100) {
      setContainer({ width: '50%' });
      setTitle({ opacity: 1, left: '30%' });
      setAbout({ opacity: 0, top: '0%' });
    }
    if (scrollY > 1000) setAbout({ opacity: 0, top: '0%' });
    // eslint-disable-next-line
  }, [scrollY]);

  return (
    <Hello.Container style={containerProps}>
      <Hello.Hero>
        <Hello.HeroText style={titleProps}>
          <HeroText text={'HELLO'} fullStop={true} size={200} />
        </Hello.HeroText>
        <Hello.BlueBox>
          <About.TextContainer style={aboutProps}>
            <About.TacoLogoText src={logoText} />
            <About.Title>
              We are <About.Bold>creative taco</About.Bold>, a web design and
              UI/UX development studio.
            </About.Title>
            <br />
            <About.Subtitle>
              We will provide innovative and aesthetic solutions for your
              startup company.
            </About.Subtitle>
          </About.TextContainer>
        </Hello.BlueBox>
      </Hello.Hero>
    </Hello.Container>
  );
}

export default HelloView;
