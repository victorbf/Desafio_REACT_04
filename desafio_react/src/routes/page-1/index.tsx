import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link className="App-link" to="/pagina-2">
        Página 2
      </Link>
    </header>
  );
};

export default Page1;
