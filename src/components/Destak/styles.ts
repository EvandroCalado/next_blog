import styled, { css } from 'styled-components';
import { Button } from '../Button/styles';
import { Wrapper as DetailsWrapper } from '../Details/styles';
import { Image } from '../Cover/styles';
import { Paragraph } from '../Excerpt/styles';

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xxlarge};

    ${Image} {
      width: 100%;
      max-width: 45rem;
      object-fit: cover;
      aspect-ratio: 16/9;
      flex: 1;
      border-radius: .5rem;
      margin-right: ${theme.spacings.large};
      margin-bottom: 0;
    }

    ${Paragraph} {
      text-align: left;
    }

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;

    a:hover {
      opacity: 1;
    }

    ${DetailsWrapper} {
      p, span, a {
        color: ${theme.colors.mediumGray};
      }

      a {
        color: ${theme.colors.darkGray};
        transition: all 300ms ease-in-out;
      }

      a:hover {
        filter: brightness(250%);
      }
  }

    ${Button} {
      margin-bottom: 0;
    }
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Excerpt = styled.p`
`;

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-top: solid 2px ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`;
