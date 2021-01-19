import HeroText from '../../components/TitleText';
import Mission from './Mission.style';
import missionbanner from '../../images/missionbanner.png';
import ParallaxImage from '../../components/ParallaxImage';

function MissionView() {
  return (
    <Mission.Container>
      <Mission.Title>
        <HeroText
          text={'SHARE YOUR IDEAS, WE’LL BRING THEM TO LIFE'}
          size={80}
          fullStop={true}
          reversed={true}
        />
      </Mission.Title>
      <ParallaxImage image={missionbanner} blur={0} height={400} strength={150}>
      </ParallaxImage>

      <Mission.Block.Container>
        <Mission.Block.Column>
          <Mission.Block.Title.Container>
            <Mission.Block.Title.Bold>
              We are a startup commited to
            </Mission.Block.Title.Bold>
            <Mission.Block.Title.Emphasis>
              startups
            </Mission.Block.Title.Emphasis>
          </Mission.Block.Title.Container>
        </Mission.Block.Column>

        <Mission.Block.Column>
          <Mission.Block.Body.Container>
            <Mission.Block.Body.Bold>
              We are here to make your dreams come true!
            </Mission.Block.Body.Bold>
            <Mission.Block.Body.Text>
              <br />
              If you are dreaming about a new company, digital platform, mobile
              app, or anything else? <br />
              <br />
              We can work on it together.
            </Mission.Block.Body.Text>
          </Mission.Block.Body.Container>
        </Mission.Block.Column>
      </Mission.Block.Container>
    </Mission.Container>
  );
}

export default MissionView;
