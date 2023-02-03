import styled from '@emotion/styled';

export const Container = styled('div')`
  width: 327px;
  font-family: Lexend Deca;
  font-weight: 400;
  padding: 40px;
  background-color: ${({ bgcolor }) => bgcolor};
  color: #f2f2f2;

  @media (min-width: 1100px) {
    width: 307px;
  }

  h1 {
    font-family: 'Big Shoulders Display';
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin: 20px 0;

    @media (min-width: 1100px) {
      margin: 40px 0;
    }
  }

  p,
  a {
    font-size: 15px;
    line-height: 25px;
  }

  p {
    margin-bottom: 40px;
    @media (min-width: 1100px) {
      margin-bottom: 80px;
    }
  }

  a {
    text-decoration: none;
    color: #e28625;
    background-color: #fff;
    border-radius: 30px;
    padding: 10px;

    &:hover {
      background-color: ${({ bgcolor }) => bgcolor};
      color: #fff;
      border: 2px solid #fff;
    }
  }
`;
