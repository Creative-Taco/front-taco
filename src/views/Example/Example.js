import exampleImg from '../../images/example.png';
import Example from './Example.style';


function ExampleView() {
  return (
    <Example.Container>
        <Example.ExampleImage src={exampleImg} />
    </Example.Container>
  );
}

export default ExampleView;
