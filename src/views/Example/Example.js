import exampleImg from '../../images/example.png';
import Example from './Example.style';
import ParallaxImage from '../../components/ParallaxImage';

function ExampleView() {
  return (
    <Example.Container>
      <ParallaxImage image={exampleImg} blur={0} height={700} strength={500}>
      </ParallaxImage>
    </Example.Container>
  );
}

export default ExampleView;
