import styled from 'styled-components';

const TitleText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => props.size}px;
  line-height: 80px;

  /* F56B00 */

  color: ${(props) => props.reversed ? '#002a73' : '#f56b00'};
`;

const TitleFullStop = styled.span`
  color: ${(props) => props.reversed ? '#f56b00' : '#002a73'};
`;

const HeroText = ({ text, fullStop, size, reversed }) => {
  return (
    <>
      <TitleText size={size}>
        {text}
        {fullStop ? <TitleFullStop>.</TitleFullStop> : null}
      </TitleText>
    </>
  );
};

export default HeroText;
