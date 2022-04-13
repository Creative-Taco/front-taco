import styled from 'styled-components';
import { devices } from '../../styles/index.style';

const Team = {};

Team.Container = styled.div`
  margin: 200px 0 0 191px;
  @media only screen and ${devices.mobileL} {
    margin: 120px 0 0 32px;
  }
`;

Team.Title = styled.div`
  max-width: 620px;
`;

Team.Main = {
  Container: styled.div`
    display: flex;
    justify-content: flex-start;
  `,
  Column: styled.div`
    max-width: 400px;
    margin-right: 40px;
  `,
  Text: {
    Block: styled.div`
      margin: 100px 0 0;
      max-width: 350px;
    `,
    Bold: styled.span`
      font-size: 30px;
      color: #002a73;
      font-weight: 800;
    `,
    Emphasis: styled.span`
      font-size: 30px;
      line-height: 26px;
      color: #002a73;
      font-style: italic;
      font-family: Libre Baskerville, Georgia;
    `,
    Body: {
      Title: styled.div`
        font-size: 16px;
        font-weight: bold;
        color: #646464;
        margin-top: 90px;
        margin-right: 90px;
        max-width: 290px;
      `,
      Text: styled.div`
        font-size: 14px;
        color: #646464;
        max-width: 290px;
      `,
    },
  },
  Image: {
    Block: styled.div`
      margin-top: 64px;
    `,
    Image: styled.img`
    width: 100%;
    height: auto
    `,
    Title: styled.div`
      font-family: Libre Baskerville, Georgia;
      font-size: 30px;
      color: #f56b00;
      font-style: italic;
      margin-top: 24px;
    `,
    Subtitle: styled.div`
      font-size: 22px;
      color: #646464;
      max-width: 250px;
      line-height: 120%;
    `,
    Spacer: styled.div`
      margin-top: 464px;
      font-weight: 500;

    `,
  },
};

export default Team;
