import { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import { PostInterface } from '../../@types';
import Spinner from '../Spinner/Spinner';

function App() {
  const [zenMode, setZenMode] = useState(false);

  // Appel API
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setPostsLoading(true);

        const { data } = await axios.get(
          `https://oblog-react.vercel.app/api/posts`
        );

        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setPostsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div className={zenMode ? 'app app--zen' : 'app'}>
      <Header
        categories={categoriesData}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      {postsLoading ? <Spinner /> : <Posts list={posts} />}
      <Footer />
    </div>
  );
}

export default App;
