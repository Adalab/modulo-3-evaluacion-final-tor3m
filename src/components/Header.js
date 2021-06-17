import rickandmorty from "../images/rickandmorty.jpg";


function Header() {
  return (
    <header className="header">
        <img className="header-logo" src={rickandmorty} alt="rickandmorty" />
    </header>
  );
}

export default Header;

