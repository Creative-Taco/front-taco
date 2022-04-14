import styled from 'styled-components';
import footerlogo from '../../images/footerlogo.png';
import arrowright from '../../images/arrowright.png';
import { devices } from '../../styles/index.style';

const Footer = {};

Footer.Container = styled.div`
  margin: 0 70px;
  border-top: 1px solid #646464;
  padding: 60px 0;
  display: flex;
  @media only screen and ${devices.mobileL} {
    flex-direction: column;
    margin: 0 36px;
  }
`;

Footer.Section = styled.div`
  max-width: 300px;
  padding-right: 160px;
  @media only screen and ${devices.mobileL} {
    max-width: 400px;
    width: 100%;
    padding-right: 80px;
    margin-bottom: 16px;
  }
`;
Footer.Image = styled.img`
  @media only screen and ${devices.mobileL} {
    display: none;
  }
`;

Footer.Text = {
  Extrabold: styled.div`
    font-size: 30px;
    color: #002a73;
    font-weight: 800;
    line-height: 42px;
    @media only screen and ${devices.mobileL} {
      display: none;
    }
  `,
  Emphasis: styled.div`
    margin-left: 42px;
    font-size: 14px;
    color: #646464;
    font-style: italic;
    font-family: Libre Baskerville, Georgia;
    @media only screen and ${devices.mobileL} {
      margin-left: 0;
    }
  `,
  Normal: styled.div``,
  Link: styled.a`
    text-decoration: none;
    font-size: 14px;
    color: #646464;
    font-weight: 800;
    line-height: 0px;
  `,
};

Footer.Arrow = styled.img`
  margin-right: 16px;
`;
function FooterComponent() {
  return (
    <Footer.Container>
      <Footer.Section>
        <Footer.Text.Emphasis>Like what you see?</Footer.Text.Emphasis>
        <Footer.Text.Extrabold>
          <Footer.Arrow src={arrowright} alt='' />
          CONTACT US
        </Footer.Text.Extrabold>
      </Footer.Section>
      <Footer.Section>
        {/* <div>United States</div>
        <div>Spain</div> */}
        <Footer.Text.Link href='mailto: contactus@creative-taco.com'>
          contactus@creative-taco.com
        </Footer.Text.Link>
      </Footer.Section>
      <Footer.Section>
        <Footer.Image src={footerlogo} alt='' />
      </Footer.Section>
    </Footer.Container>
  );
}

export default FooterComponent;
