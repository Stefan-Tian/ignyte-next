import styled from 'styled-components';
import Loading from './Loading';

const LoadingWrapper = styled.div`
  font-size: 90px;
`;

const ButtonLoading = () => (
  <LoadingWrapper>
    <Loading />
  </LoadingWrapper>
);

export default ButtonLoading;
