import rickandmorty from "../images/rickandmorty.jpg";


function Header() {
  return (
    <header className="">
        <img className="logo-rickandmorty" src={rickandmorty} alt="rickandmorty" />
    </header>
  );
}

export default Header;

