import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  height: 8rem;
  border-bottom: 1px solid #29292e;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 112rem;
    height: 8rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};

    display: flex;
    align-items: center;

    button {
      margin-left: auto;
    }
  `}
`;

export const Image = styled.img``;

export const Nav = styled.nav`
  margin-left: 8rem;
  height: 8rem;
`;

type LinkProps = {
  isActive?: boolean;
};

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    display: inline-block;
    position: relative;
    padding: 0 ${theme.spacings.xxsmall};
    height: 8rem;
    line-height: 8rem;
    color: ${theme.colors.text};
    transition: color 0.2s;
    font-size: ${theme.font.sizes.medium};

    & + a {
      margin-left: ${theme.spacings.medium};
    }

    &:hover {
      color: ${theme.colors.white};
    }

    ${isActive &&
    css`
      & {
        color: ${theme.colors.white};
        font-weight: ${theme.font.bold};
      }

      ::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${theme.colors.yellow};
      }
    `}
  `}
`;
