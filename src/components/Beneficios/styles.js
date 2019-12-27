import styled from 'styled-components';

export const Layout = styled.div`
  background: #f7ce48;
  padding: 7rem 7.5rem;
  @media only screen and (max-width: 992px) {
    padding: 3rem;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  text-align: center;
  color: #6d6e71;
  font-size: 6rem;
  line-height: 65px;
  margin: 0px auto 9rem auto;
  text-transform: uppercase;
  max-width: 950px;
  @media only screen and (max-width: 992px) {
    font-size: 25px;
    line-height: 29px;
    margin-bottom: 20px;
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
  width: 290px;
  height: 250px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  &:hover {
    background: #5b5e59;
    .detail {
      display: flex;
      align-self: center;
    }
    .step {
      display: none;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    min-height: auto;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Text = styled.div`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.9rem;
  color: #fff;
  font-family: 'Source Serif Pro', serif;
  @media only screen and (max-width: 992px) {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const Detail = styled.div`
  display: none;
  color: #ffffff;
  font-size: 15px;
  line-height: 24.5px;
  align-self: flex-start;
  padding: 25px 15px;
  font-family: 'Source Serif Pro', serif;
  text-align: justify;
  text-align-last: center;
`;
