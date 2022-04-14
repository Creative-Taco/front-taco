import exampleImg from '../../images/example.png';
import Example from './Example.style';
import ParallaxImage from '../../components/ParallaxImage';
import useWindowDimensions from '../../utils/useWindowDimensions';
function ExampleView() {
  const { width } = useWindowDimensions();

  return (
    <Example.Container>
      <ParallaxImage
        image={exampleImg}
        blur={0}
        height={width < 425 ? 500 : 900}
        strength={500}
        bgImageStyle={{maxWidth: '400px'}}
      ></ParallaxImage>
    </Example.Container>
  );
}

export default ExampleView;
