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
        bgStyles={
          width < 425
            ? { maxWidth: '700px', height: 'auto', margin: '80px 0' }
            : { width: '100%', height: 'auto', margin: '40px 0' }
        }
      ></ParallaxImage>
    </Example.Container>
  );
}

export default ExampleView;
