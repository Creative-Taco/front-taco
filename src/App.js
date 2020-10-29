import Section from './App.style';
import tacoLogo from './images/tacologo.svg';
import arrowDown from './images/arrowdown.svg';
import tacoMask from './images/tacomasklarge.svg';

function App() {
  return (
    <Section.Container> {/* Main app container */}

      <Section.TacoIcon src={ tacoLogo } alt="" />      
      <Section.ScrollDownText>SCROLL</Section.ScrollDownText>
      <Section.ScrollDownImage src={ arrowDown } alt="" />

      <Section.HeroContainer> {/* hero container */}
        <Section.HeroText> {/* text overlay */}
          HELLO<Section.HeroFullStop>.</Section.HeroFullStop>
        </Section.HeroText>
        <Section.BlueBox>
          <Section.TacoMask src={tacoMask} alt="" /> {/* taco mask */}
        </Section.BlueBox>
      </Section.HeroContainer>

    </Section.Container>
  );
}

export default App;
