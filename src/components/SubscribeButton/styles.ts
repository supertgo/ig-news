import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 26rem;
    height: 6.4rem;
    border: 0;
    border-radius: ${theme.spacings.medium};
    background: ${theme.colors.yellow};
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
