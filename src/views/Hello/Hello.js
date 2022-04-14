import React, { useEffect } from 'react';
import About from './About.style';
import logoText from '../../images/logotext.png';
import Hello from './Hello.style';
import useScroll from '../../utils/useScroll';

function HelloView() {
  const { touchScrollY, scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 0 || touchScrollY) {
      console.log(touchScrollY, scrollY);
    } else {
      console.log('at top');
    }
  }, [touchScrollY, scrollY]);

  return (
    <Hello.Container id='hello-container'>
      <Hello.Wrapper>
        <Hello.Hero
          id='hello-hero'
          $isAtTop={scrollY <= 0}
          $isPassed={scrollY >= 600}
          $mobileScroll={touchScrollY}
        >
          <Hello.TitleText>
            HELLO<Hello.TitleFullStop>.</Hello.TitleFullStop>
          </Hello.TitleText>
        </Hello.Hero>

        <About.TextContainer
          $isAtTop={scrollY <= 0}
          $isComplete={scrollY >= 1100}
          $mobileScroll={touchScrollY}
        >
          <About.TacoLogoText src={logoText} />
          <About.Title>
            We are <About.Bold>creative taco</About.Bold>, a web design and
            UI/UX development studio.
          </About.Title>
          <br />
          <About.Subtitle>
            We will provide innovative and aesthetic solutions for your startup
            company.
          </About.Subtitle>
        </About.TextContainer>

        <Hello.BlueContainer id='hello-blue-container' $isAtTop={scrollY <= 0} $mobileScroll={touchScrollY}>
          <Hello.BlueBox id='hello-bluebox'></Hello.BlueBox>
        </Hello.BlueContainer>
      </Hello.Wrapper>
    </Hello.Container>
  );
}

export default HelloView;
