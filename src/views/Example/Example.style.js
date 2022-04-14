import styled from 'styled-components';
import { devices } from '../../styles/index.style';

const Example = {};

Example.Container = styled.div`
    height: 600px;
    margin: 0 44px 44px;
    @media only screen and ${devices.mobileL} {
        height: 300px;
        margin: 0 0 44px;
  }
`;

Example.ExampleImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover
`;

export default Example