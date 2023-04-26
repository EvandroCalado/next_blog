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
          url: `${process.env.SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR',
        }}
      />
    </Styled.Wrapper>
  );
};

export default Comments;
