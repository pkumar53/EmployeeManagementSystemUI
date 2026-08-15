import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <header className="header">

      <h2
        onClick={() => navigate("/")}
        className="logo"
      >
        Employee Management System
      </h2>

    </header>
  );
}

export default Header;