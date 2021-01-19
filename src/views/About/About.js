import About from './About.style';
import logoText from '../../images/logotext.png';

function AboutView() {
  return (
    <About.Container>
      <About.BlueBox>
        <About.TextContainer>
          <About.TacoLogoText src={logoText} />
          <About.Title>
            We are <About.Bold>creative taco</About.Bold>, a web design and UI/UX development studio.
          </About.Title>
          <br/>
          <About.Subtitle>
            We will provide innovative and aesthetic solutions for your startup
            company.
          </About.Subtitle>
        </About.TextContainer>
      </About.BlueBox>
    </About.Container>
  );
}

export default AboutView;
