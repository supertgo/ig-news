import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: ${theme.spacings.xlarge};
    border: 0;
    padding: 0 ${theme.spacings.small};
    border-radius: ${theme.spacings.xlarge};
    background: ${theme.colors.shape};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    transition: filter 0.2;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      width: 20px;
      height: 20px;

      &:first-child {
        margin-right: ${theme.spacings.xsmall};
      }
    }

    svg.closeIcon {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
