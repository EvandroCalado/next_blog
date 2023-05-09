import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    font-weight: 500;
    color: ${theme.colors.mediumGray};
    font-style: italic;
    margin-bottom: ${theme.spacings.large};
  
    & a:not(:last-of-type):not(:first-of-type)::after {
      content: ',';
    } 

    @media ${theme.media.lteMedium} {
      margin-top: 1rem;

      p {
        display: none;
      }
      span:not(:last-of-type) {
        display: none;
    }
    }
  `}
`;
