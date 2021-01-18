import Scroll from './Scroll.style';
import arrowDown from '../../images/arrowdown.svg';

function ScrollDown() {
  return (
    <div>
      <Scroll.ScrollDownText>SCROLL</Scroll.ScrollDownText>
      <Scroll.ScrollDownImage src={arrowDown} alt='Example design of application' />
    </div>
  );
}

export default ScrollDown;
