import { PostInterface } from '../../@types';

import './Post.scss';

interface PostProps {
  data: PostInterface;
}

function Post({ data }: PostProps) {
  return (
    <article className="post">
      <h2 className="post-title">{data.title}</h2>
      <div className="post-category">{data.category.name}</div>
      <p className="post-excerpt">{data.excerpt}</p>
    </article>
  );
}

export default Post;
