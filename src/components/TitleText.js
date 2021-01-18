import styled from 'styled-components';

const HeroText = ({ text, fullStop, size }) => {
    const TitleText = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: ${size}px;
  
    /* F56B00 */
  
    color: #f56b00;
  `;
  
  const TitleFullStop = styled.span`
    color: #002a73;
  `;

  return (
    <>
      <TitleText>
        {text}
        {fullStop ? <TitleFullStop>.</TitleFullStop> : null}
      </TitleText>
    </>
  );
};

export default HeroText;
