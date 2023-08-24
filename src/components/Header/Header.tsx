import { Category } from '../../@types';
import './Header.scss';

interface CategoryProps {
  categories: Category[];
}

function Header({ categories }: CategoryProps) {
  const items = categories.map((item) => (
    <a key={item.id} className="menu-link menu-link" href={item.slug}>
      {item.name}
    </a>
  ));

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        {items}
        <button className="menu-btn" type="button">
          Activer le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
