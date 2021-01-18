import Landing from './Landing.style';
import tacoMask from '../../images/tacomasklarge.svg';
import HeroText from '../../components/TitleText';

function LandingView() {
  return (
    <Landing.Container>
      <Landing.HeroContainer>
        <Landing.HeroText>
          <HeroText text={'HELLO'} fullStop={true} size={200} />
        </Landing.HeroText>
        <Landing.BlueBox>
          <Landing.TacoMask src={tacoMask} alt='' />
        </Landing.BlueBox>
      </Landing.HeroContainer>
    </Landing.Container>
  );
}

export default LandingView;
