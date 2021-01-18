import Landing from './Landing.style';
import tacoMask from '../../images/tacomasklarge.svg';

function LandingView() {
  return (
    <Landing.Container> {/* Main app container */}
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

export default LandingView;
