import * as Styled from './Comments.styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ title, slug }: CommentsProps) => {
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="next-blog-9"
        config={{
          url: `https://next-blog-evandro.vercel.app/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};

export default Comments;
