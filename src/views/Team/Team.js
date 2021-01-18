import Team from './Team.style';
import HeroText from '../../components/TitleText';
import johnprofile from '../../images/johnprofile.png';
import mariaprofile from '../../images/mariaprofile.png';

function TeamView() {
  return (
    <Team.Container>
      <Team.Title>
        <HeroText text={'WE LOVE WHAT WE DO'} size={80} fullStop={true} />
      </Team.Title>
      <Team.Main.Container>
        <Team.Main.Column>
          <Team.Main.Text.Block>
            <Team.Main.Text.Bold>The ideal</Team.Main.Text.Bold>
            <Team.Main.Text.Emphasis>
              {' '}
              digital partnership
            </Team.Main.Text.Emphasis>
            <Team.Main.Text.Body.Title>
              Your digital projects require professionals in each area.
            </Team.Main.Text.Body.Title>
            <br />
            <Team.Main.Text.Body.Text>
              We are a creative duo based in the United States and Spain and,
              apart for our love of tacos, we love working together and creating
              beautiful and functional digital work.
            </Team.Main.Text.Body.Text>
          </Team.Main.Text.Block>
        </Team.Main.Column>
        <Team.Main.Column>
          <Team.Main.Image.Block>
            <Team.Main.Image.Image src={johnprofile} />
            <Team.Main.Image.Title>John P. Correia</Team.Main.Image.Title>
            <Team.Main.Image.Subtitle>
              Experienced Full-Stack developer
            </Team.Main.Image.Subtitle>
          </Team.Main.Image.Block>
        </Team.Main.Column>
        <Team.Main.Column>
          <Team.Main.Image.Block>
            <Team.Main.Image.Spacer />
            <Team.Main.Image.Image src={mariaprofile} />
            <Team.Main.Image.Title>Maria Vallejo</Team.Main.Image.Title>
            <Team.Main.Image.Subtitle>
              UX/UI designer and digital illustrator
            </Team.Main.Image.Subtitle>
          </Team.Main.Image.Block>
        </Team.Main.Column>
      </Team.Main.Container>
    </Team.Container>
  );
}

export default TeamView;
