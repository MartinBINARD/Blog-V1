import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

import { Category, Post } from '../../@types';

function App() {
  console.log(categoriesData);
  console.log(postsData);

  return (
    <div className="app">
      <Header categories={categoriesData} />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
