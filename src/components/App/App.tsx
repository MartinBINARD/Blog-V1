import { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import Spinner from '../Spinner/Spinner';

import './App.scss';

import { CategoryInterface, PostInterface } from '../../@types';

function App() {
  const [zenMode, setZenMode] = useState(false);

  // Appel API
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [categoriesLoading, setcategoriesLoading] = useState(false);

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

    const getCategories = async () => {
      try {
        setcategoriesLoading(true);

        const { data } = await axios.get(
          `https://oblog-react.vercel.app/api/categories`
        );

        setCategories(data);
      } catch (error) {
        console.log('Error Categories: ', error);
      } finally {
        setcategoriesLoading(false);
      }
    };

    getPosts();
    getCategories();
  }, []);

  return (
    <div className={zenMode ? 'app app--zen' : 'app'}>
      {!postsLoading && !categoriesLoading && (
        <Header
          categories={categories}
          zenMode={zenMode}
          setZenMode={setZenMode}
        />
      )}
      {postsLoading || categoriesLoading ? <Spinner /> : <Posts list={posts} />}
      <Footer />
    </div>
  );
}

export default App;
