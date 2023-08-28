import { useParams } from 'react-router-dom';

import Post from '../Post/Post';

import { PostInterface } from '../../@types';

import './Posts.scss';

interface PostsProps {
  list: PostInterface[];
}

function Posts({ list }: PostsProps) {
  // React Router fournit un hook pour facilement
  // récupérer les paramètres d'URL
  // `useParams` renvoie un objet avec les paramètres en propriété
  // { nomDuParamètre: valeur }
  // const params = useParams();
  // { slug: 'react' }
  const { slug } = useParams();

  // SI j'ai une catégorie dans l'URL
  // ALORS je filtre mes articles
  // SINON j'affiche tout
  const filteredPosts = slug
    ? list.filter(
        (post) => post.category.slug.toLowerCase() === slug.toLowerCase()
      )
    : list; // ici c'est l'accueil

  const items = filteredPosts.map((post) => <Post key={post.id} data={post} />);

  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">{items}</div>
    </main>
  );
}

export default Posts;
