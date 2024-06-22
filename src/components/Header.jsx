import "./Header.css";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className='header'>
      <div>
        <h1>North Coders</h1>
        <h1 className='welcome'>Welcome to NC NEWS</h1>
      </div>
      <h2 className='grumpy'>
        <FontAwesomeIcon icon={faUser} />
        Grumpy
      </h2>
    </header>
  );
}

export default Header;
