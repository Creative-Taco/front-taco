import styled from 'styled-components';

const Mission = {};

Mission.Container = styled.div`
  margin: 330px 44px 150px;
`;

Mission.Title = styled.div`
  max-width: 840px;
  position: relative;
  top: 36px;
  left: 220px;
  z-index: 15;

`;

Mission.Banner = styled.img`
  width: 100%;
  height: auto;
`;

Mission.Block = {
  Container: styled.div`
    display: flex;
  `,
  Column: styled.div``,
  Title: {
    Container: styled.div`
      margin: 48px 0 0 230px;
      color: #f56b00;
      max-width: 300px;
    `,
    Bold: styled.div`
      font-weight: 800;
      font-size: 30px;
      line-height: 36px;
    `,
    Emphasis: styled.div`
      font-size: 30px;
      line-height: 26px;
      font-style: italic;
      font-family: Libre Baskerville, Georgia;
      margin-top: 6px;
    `,
  },
  Body: {
    Container: styled.div`
      margin: 48px 0 0 70px;
      color: #f56b00;
      max-width: 300px;
    `,
    Bold: styled.div`
      font-size: 16px;
      font-weight: bold;
      color: #646464;
    `,
    Text: styled.div`
      font-size: 14px;
      color: #646464;
    `,
  },
};

export default Mission;
