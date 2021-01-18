import styled from 'styled-components';

const HeroText = ({ displayText, fullStop, size }) => {
    const TitleText = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: ${size}px;
    line-height: 300px;
  
    /* F56B00 */
  
    color: #f56b00;
  `;
  
  const TitleFullStop = styled.span`
    color: #002a73;
  `;

  return (
    <>
      <TitleText>
        {displayText}
        {fullStop ? <TitleFullStop>.</TitleFullStop> : null}
      </TitleText>
    </>
  );
};

export default HeroText;
