import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
  `}
`;

export const Article = styled.article`
  max-width: 72rem;
  margin: 8rem auto 0;
`;

export const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 900;
`;

export const Time = styled.time`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text};
    margin-top: ${theme.spacings.small};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    line-height: ${theme.spacings.medium};
    font-size: 1.8rem;
    color: ${theme.colors.text};

    p,
    ul {
      margin: ${theme.spacings.small};
    }

    ul {
      padding-left: ${theme.spacings.small};

      li {
        margin: ${theme.spacings.xxsmall} 0;
      }
    }
  `}
`;
