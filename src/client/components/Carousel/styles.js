import styled, { css } from 'styled-components';

export const Title = styled.h2`
  color: #f15a22;
  font-size: 6rem;
  padding-top: 9rem;
  text-align: center;
  margin-right: 17rem;
  ${props =>
    props.theme == 'yellow' &&
    css`
      color: #f7ce48;
    `};
`;

export const SliderUI = styled.div`
  position: relative;
  width: 100%;
  max-width: 1030px;
  margin: -10rem auto 0 auto;
  overflow: hidden;
  white-space: nowrap;
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
