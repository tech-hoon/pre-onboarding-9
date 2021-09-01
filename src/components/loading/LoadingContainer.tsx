import React from 'react';
import styled from 'styled-components';

const LoadingContainer = () => <Loading />;

const Loading = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default React.memo(LoadingContainer);
