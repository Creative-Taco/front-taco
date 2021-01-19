import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

import Hello from './Hello.style';
import HeroText from '../../components/TitleText';
import useScroll from '../../utils/useScroll';

function HelloView() {
  const { scrollY } = useScroll();
  const [initialY, setInitalY] = useState(scrollY);
  const [containerProps, setContainer] = useSpring(() => ({ width: '50%' }));
  const [titleProps, setTitle] = useSpring(() => ({ opacity: 1,left: '30%' }));

  useEffect(() => {
    if (scrollY > initialY) {
      setContainer({ width: '100%' });
      setTitle({opacity: 0, left: '50%'})
    }
    if (scrollY <= initialY) {
      setContainer({ width: '50%' });
      setTitle({opacity: 1, left: '30%'})
      
    }
  }, [scrollY]);

  return (
    <Hello.Container style={containerProps}>
      <Hello.Hero>
        <Hello.HeroText style={titleProps}>
          <HeroText text={'HELLO'} fullStop={true} size={200} />
        </Hello.HeroText>
        <Hello.BlueBox></Hello.BlueBox>
      </Hello.Hero>
    </Hello.Container>
  );
}

export default HelloView;
