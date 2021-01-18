import styled from 'styled-components';

const HeroText = ({ text, fullStop, size, reversed }) => {
    const TitleText = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: ${size}px;
    line-height: 80px;
  
    /* F56B00 */
  
    color: ${reversed ? '#002a73': '#f56b00'};
  `;
  
  const TitleFullStop = styled.span`
  color: ${reversed ? '#f56b00' : '#002a73'};
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
