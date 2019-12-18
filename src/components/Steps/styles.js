import styled from 'styled-components';

export const Layout = styled.div`
  background: #f15a22;
  padding: 4rem 7.5rem;
  @media only screen and (max-width: 992px) {
    padding: 2rem;
    overflow: hidden;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  font-size: 6rem;
  margin-bottom: 7rem;
  text-transform: uppercase;
  @media only screen and (max-width: 992px) {
    font-size: 39px;
    line-height: 41px;
    margin-bottom: 3.5rem;
    margin-top: 2rem;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LayoutRow = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  &:hover {
    .detail {
      display: block;
    }
    .step {
      display: none;
    }
  }
  @media only screen and (max-width: 992px) {
    flex-direction: row;
    &:hover {
      .detail {
        z-index: 1;
      }
      .head {
        display: none;
      }
    }
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    background: #ffffff;
  }
  &.initial {
    &:after {
      left: initial;
      right: 0;
      width: 50%;
    }
  }
  &.last {
    &:after {
      width: 50%;
    }
  }
  @media only screen and (max-width: 992px) {
    &:after {
      left: 50%;
      display: block;
      content: '';
      width: 2px;
      height: 100%;
      background: #ffffff;
    }
    &.initial {
      &:after {
        left: 50%;
        top: 50%;
        height: 50%;
        width: 2px;
        height: 100%;
      }
    }
    &.last {
      &:after {
        bottom: 50%;
        height: 50%;
        width: 2px;
        height: 100%;
      }
    }
  }
`;

export const Circle = styled.div`
  z-index: 1;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: #ffffff;
  color: #00949e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Body = styled.div`
  margin-top: 3rem;
  min-width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    justify-content: center;
    margin-top: 0;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Detail = styled.div`
  display: none;
  background: #ffffff;
  color: #00949e;
  flex: 1;
  margin-right: 0.5rem;
  border-radius: 15px;
  padding: 3rem 2rem;
  font-size: 15px;
  line-height: 20px;
  text-align: justify;
  text-align-last: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Text = styled.div`
  max-width: 170px;
  margin-top: 4rem;
  text-align: center;
  font-size: 1.9rem;
  font-weight: 900;
  color: #fff;
  @media only screen and (max-width: 992px) {
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    margin-top: 1rem;
    max-width: 90px;
  }
`;
