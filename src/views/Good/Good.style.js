import styled from 'styled-components';
import { devices } from '../../styles/index.style';

const Good = {};

Good.Container = styled.div`
  margin: 360px 0 0 191px;
  @media only screen and ${devices.tablet} {
    margin: 360px 0 0 32px;
  }
`;

Good.Title = {
  Section: styled.div`
    max-width: 700px;
  `,
  TitleText: styled.div`
    color: #f56b00;
  `,
  FullStop: styled.span`
    color: #002a73;
  `,
};

Good.Explanation = {
  Section: styled.div``,
  Title: {
    Section: styled.div`
      margin-top: 80px;
    `,
    Bold: styled.div`
      font-size: 30px;
      color: #002a73;
      font-weight: 800;
    `,
    Emphasis: styled.div`
      font-size: 30px;
      line-height: 26px;
      color: #002a73;
      font-style: italic;
      font-family: Libre Baskerville, Georgia;
    `,
  },
  Flex: {
    Container: styled.div`
      margin-top: 22px;
      display: flex;
      @media only screen and ${devices.tablet} {
        flex-direction: column;
      }
    `,
    Item: styled.div``,
  },
  SubTitle: {
    Section: styled.div`
      margin-top: 90px;
      max-width: 290px;
    `,
    Title: styled.div`
      font-size: 16px;
      font-weight: bold;
    `,
    Body: styled.div`
      font-size: 14px;
    `,
  },
  Block: {
    Container: styled.div`
      margin-left: 186px;
      max-width: 720px;
      max-height: 600px;
      background-color: #002a73;
      padding: 80px 50px 20px 68px;
      @media only screen and ${devices.tablet} {
      padding: 40px 63px;
      margin-left: -32px;
      margin-top: 32px;
      max-height: 1200px;

      }
    `,
    Wrapper: styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: 600px;
    `,
    BoxLeft: styled.div`
      min-width: 250px;
      margin: 0 36px 80px 0;
    `,
    BoxRight: styled.div`
      min-width: 250px;
      margin: 0 15px 80px 0;
    `,
    Title: styled.div`
      margin-bottom: 16px;
      font-size: 18px;
      color: #f56b00;
      font-weight: 800;
    `,
    List: styled.div`
      font-size: 22px;
      color: #fff;
      line-height: 120%;
    `,
    Item: styled.div``,
  },
};

export default Good;
