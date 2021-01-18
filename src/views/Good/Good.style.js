import styled from 'styled-components';

const Good = {};

Good.Container = styled.div`
  margin: 200px 0 0 200px;
`;

Good.Title = {
  Section: styled.div`
    max-width: 700px;
  `,
  TitleText: styled.div`
    font-weight: 800;
    font-size: 80px;
    line-height: 90%;
    color: #f56b00;
  `,
  FullStop: styled.span`
    color: #002a73;
  `,
};

Good.Explanation = {
  Section: styled.div``,
  Flex: {
    Container: styled.div`
      margin-top: 32px;
      display: flex;
    `,
    Item: styled.div``,
  },
  Title: {
    Section: styled.div`
      margin-top: 90px;
    `,
    Bold: styled.div`
      font-size: 30px;
      color: #002a73;
      font-weight: 800;
    `,
    Emphasis: styled.div`
      font-size: 30px;
      color: #002a73;
      font-style: italic;
      font-family: Libre Baskerville, Georgia;
    `,
  },
  SubTitle: {
    Section: styled.div`
      margin-top: 100px;
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
      margin-left: 180px;
      max-width: 720px;
      height: 600px;
      max-height: 600px;
      background-color: #002a73;
      padding-bottom: 20px;
    `,
    Wrapper: styled.div`
      padding: 80px 0 0 60px;
      display: flex;
      flex-wrap: wrap;
      max-width: 600px;
    `,
    Box: styled.div`
      min-width: 250px;
      margin: 0 40px 80px 0;
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
    `,
    Item: styled.div``,
  },
};

export default Good;
