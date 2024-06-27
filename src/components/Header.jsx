import "./Header.css";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className='header-container'>
      <div>
        <h1 className='welcome'> NC NEWS</h1>
      </div>
      <h2 className='grumpy'>
        <FontAwesomeIcon icon={faUser} />
        Grumpy
      </h2>
    </header>
  );
}

export default Header;
