import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 0.2em;
    height: 0.2em;
  }
  & {
    margin: auto;
    position: relative;
    border-top: 0.022em solid rgba(255, 255, 255, 0.2);
    border-right: 0.022em solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.022em solid rgba(255, 255, 255, 0.2);
    border-left: 0.022em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <Loader></Loader>;
};

export default Loading;
