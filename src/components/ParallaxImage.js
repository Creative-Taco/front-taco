import { Parallax } from 'react-parallax';

const ParallaxImage = ({ image, height, blur, bgImageAlt, strength, children }) => (
  <Parallax
    blur={blur ? blur : 0}
    bgImage={image}
    bgImageAlt={bgImageAlt}
    strength={strength}
    bgImageStyle={{maxWidth: '700px', height: 'auto', margin: '80px 0'}}


  >
    <div style={{ height: height }}>
    {children}

    </div>
  </Parallax>
);

export default ParallaxImage;