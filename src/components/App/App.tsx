import { useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

function App() {
  const [zenMode, setZenMode] = useState(false);

  return (
    <div className={zenMode ? 'app app--zen' : 'app'}>
      <Header
        categories={categoriesData}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      <Posts list={postsData} />
      <Footer />
    </div>
  );
}

export default App;
