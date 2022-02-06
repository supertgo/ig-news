import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
  `}
`;

export const Content = styled.div`
  max-width: 72rem;
  margin: 8rem auto 0;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;

    & + a {
      margin-top: ${theme.spacings.medium};
      padding-top: ${theme.spacings.medium};
      border-top: 1px solid #323238;
    }
  `}
`;

export const Time = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    display: flex;
    align-items: center;
    color: ${theme.colors.text};
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    display: block;
    font-size: 2.4rem;
    margin-top: ${theme.spacings.medium};
    line-height: ${theme.spacings.medium};
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.yellow};
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    margin-top: ${theme.spacings.xxsmall};
    line-height: 2.6rem;
  `}
`;
