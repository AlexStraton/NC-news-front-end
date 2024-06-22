import { Link } from "react-router-dom";
import "./Nav-bar.css";

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <Link className='nav_bar_item' to={`/`}>
        Home
      </Link>
      <Link className='nav_bar_item' to={`/articles`}>
        All articles
      </Link>
      <Link className='nav_bar_item' to={`/articles/topic/coding`}>
        Coding articles
      </Link>
      <Link className='nav_bar_item' to={`/articles/topic/cooking`}>
        Cooking articles
      </Link>
      <Link className='nav_bar_item' to={`/articles/topic/football`}>
        Football articles
      </Link>
    </nav>
  );
}
