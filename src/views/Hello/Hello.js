import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';

import About from './About.style';
import logoText from '../../images/logotext.png';
import Hello from './Hello.style';
import HeroText from '../../components/TitleText';
import useScroll from '../../utils/useScroll';

function HelloView() {
  const { scrollY } = useScroll();
  const [containerProps, setContainer] = useSpring(() => ({ width: '50%' }));
  const [titleProps, setTitle] = useSpring(() => scrollY > 100 ? ({ opacity: 0, left: '100%' }) : ({ opacity: 1, left: '30%' }));
  const [aboutProps, setAbout] = useSpring(() => scrollY > 100 ? ({ opacity: 1, top: '33%' }) : ({ opacity: 0, top: '20%' }));

  useEffect(() => {
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
