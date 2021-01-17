import Landing from './Landing.style';
import arrowDown from '../../images/arrowdown.svg';
import tacoMask from '../../images/tacomasklarge.svg';

function App() {
  return (
    <Landing.Container> {/* Main app container */}
        
      <Landing.ScrollDownText>SCROLL</Landing.ScrollDownText>
      <Landing.ScrollDownImage src={ arrowDown } alt="" />

      <Landing.HeroContainer> {/* hero container */}
        <Landing.HeroText> {/* text overlay */}
          HELLO<Landing.HeroFullStop>.</Landing.HeroFullStop>
        </Landing.HeroText>
        <Landing.BlueBox>
          <Landing.TacoMask src={tacoMask} alt="" /> {/* taco mask */}
        </Landing.BlueBox>
      </Landing.HeroContainer>

    </Landing.Container>
  );
}

export default App;
