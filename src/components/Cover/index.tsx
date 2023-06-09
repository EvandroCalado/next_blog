import * as Styled from './styles';

export type CoverProps = {
  url: string;
  alt: string;
};

const Cover = ({ url, alt }: CoverProps) => {
  return <Styled.Image src={url} alt={alt} />;
};

export default Cover;
