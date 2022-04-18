import Good from './Good.style';
import HeroText from '../../components/TitleText';
import useWindowDimensions from '../../utils/useWindowDimensions';

function GoodView() {
  const { width } = useWindowDimensions();
  return (
    <Good.Container>
      <Good.Title.Section>
        <Good.Title.TitleText>
          <HeroText text={"WHAT WE'RE GOOD AT"} size={width < 425 ? 64 : 80} fullStop={true} />
        </Good.Title.TitleText>
      </Good.Title.Section>

      <Good.Explanation.Flex.Container>
        <Good.Explanation.Section>
          <Good.Explanation.Title.Section>
            <Good.Explanation.Title.Bold>
              Trust us with your
            </Good.Explanation.Title.Bold>
            <Good.Explanation.Title.Emphasis>
              digital strategy
            </Good.Explanation.Title.Emphasis>
          </Good.Explanation.Title.Section>

          <Good.Explanation.SubTitle.Section>
            <Good.Explanation.SubTitle.Title>
              Leave your digital transformation in the best hands!
            </Good.Explanation.SubTitle.Title>
            <Good.Explanation.SubTitle.Body>
              <br />
              We are experts in digital design, illustration, and development.
              We will provide all the support you need during your project. From
              initial conception to its final release and maintenance, we will
              be with you all the way. <br />
              <br />
              We help you grow your idea into a great digital solution.
            </Good.Explanation.SubTitle.Body>
          </Good.Explanation.SubTitle.Section>
        </Good.Explanation.Section>

        <Good.Explanation.Block.Container>
          <Good.Explanation.Block.Wrapper>
            <Good.Explanation.Block.Box>
              <Good.Explanation.Block.Title>
                Design
              </Good.Explanation.Block.Title>
              <Good.Explanation.Block.List>
                <Good.Explanation.Block.Item>
                  Web design
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Art direction
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Branding{' '}
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>UI/UX</Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Digital illustration
                </Good.Explanation.Block.Item>
              </Good.Explanation.Block.List>
            </Good.Explanation.Block.Box>

            <Good.Explanation.Block.Box>
              <Good.Explanation.Block.Title>
                Digital &amp; Mobile
              </Good.Explanation.Block.Title>
              <Good.Explanation.Block.List>
                <Good.Explanation.Block.Item>
                  Websites
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Responsive design
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Mobile &amp; tablet
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Mobile apps (IOS, Android)
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Web apps
                </Good.Explanation.Block.Item>
              </Good.Explanation.Block.List>
            </Good.Explanation.Block.Box>

            <Good.Explanation.Block.Box>
              <Good.Explanation.Block.Title>
                Community
              </Good.Explanation.Block.Title>
              <Good.Explanation.Block.List>
                <Good.Explanation.Block.Item>
                  Social media
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Live streaming
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Blog/Vlog
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Podcasts
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Analytics
                </Good.Explanation.Block.Item>
              </Good.Explanation.Block.List>
            </Good.Explanation.Block.Box>

            <Good.Explanation.Block.Box>
              <Good.Explanation.Block.Title>
                Web Development
              </Good.Explanation.Block.Title>
              <Good.Explanation.Block.List>
                <Good.Explanation.Block.Item>
                  Front end &amp; back end
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  Full-stack development
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>
                  JavaScript
                </Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>React</Good.Explanation.Block.Item>
                <Good.Explanation.Block.Item>Node</Good.Explanation.Block.Item>
              </Good.Explanation.Block.List>
            </Good.Explanation.Block.Box>
          </Good.Explanation.Block.Wrapper>
        </Good.Explanation.Block.Container>
      </Good.Explanation.Flex.Container>
    </Good.Container>
  );
}

export default GoodView;
