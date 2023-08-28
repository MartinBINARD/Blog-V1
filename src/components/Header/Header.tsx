import { Link } from 'react-router-dom';

import { CategoryInterface } from '../../@types';
import './Header.scss';

interface HeaderProps {
  categories: CategoryInterface[];
  zenMode: boolean;
  setZenMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  const allCategories = categories.map((category) => (
    // Router 2 : ajout des liens
    // → <Link to="">
    <Link
      key={category.id}
      className="menu-link"
      to={`/category/${category.slug}`}
    >
      {category.name}
    </Link>
  ));

  const handleClick = () => {
    setZenMode(!zenMode);
  };

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <Link className="menu-link menu-link--selected" to="/">
          Accueil
        </Link>

        {allCategories}

        <button className="menu-btn" type="button" onClick={handleClick}>
          {zenMode ? 'Désactiver' : 'Activer'} le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
