import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <div>
        <h1>North Coders</h1>
        <h1>Welcome to NC NEWS</h1>
      </div>
      <h2 className='grumpy'>You are logged in as: Grumpy</h2>
    </header>
  );
}

export default Header;
