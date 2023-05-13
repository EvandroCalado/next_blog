import styled, { css } from 'styled-components';
import { Wrapper as Title } from '../Heading/styles';
import { Wrapper as Description } from '../Content/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`

    ${Title} {
      text-align: left;
      margin: ${theme.spacings.xsmall} 0;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.large};
    }

    ${Description} {
      color: ${theme.colors.secondary};
    }
  `}
`;
