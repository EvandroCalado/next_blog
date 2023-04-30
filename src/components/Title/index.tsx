import * as Styled from './styles';

export type TitleProps = {
  image: string;
  title: string;
};

const Title = ({ image, title }: TitleProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={image} alt={title} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default Title;
