import { Parallax } from 'react-parallax';

const ParallaxImage = ({
  image,
  height,
  blur,
  bgImageAlt,
  strength,
  bgStyles,
  children,
}) => (
  <Parallax
    blur={blur ? blur : 0}
    bgImage={image}
    bgImageAlt={bgImageAlt}
    strength={strength}
    bgImageStyle={bgStyles}
  >
    <div style={{ height: height }}>{children}</div>
  </Parallax>
);

export default ParallaxImage;
