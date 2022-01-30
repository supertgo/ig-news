import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
    height: calc(100vh- 8rem);

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Image = styled.img``;

export const Section = styled.section`
  max-width: 60rem;

  button {
    margin-top: 4rem;
  }
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: ${theme.font.bold};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 7.2rem;
    line-height: 7.2rem;
    font-weight: 900;
    margin-top: ${theme.spacings.large};
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: 2.4rem;
    line-height: 3.6rem;

    span {
      font-weight: ${theme.font.bold};
    }
  `}
`;
