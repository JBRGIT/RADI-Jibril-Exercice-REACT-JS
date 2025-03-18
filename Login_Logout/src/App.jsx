import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  const onClick = () => {
    setIsLogged((inverse) => !inverse);
  };

  return (
    <div>
      {isLogged ? <Logout onClick={onClick} /> : <Login onClick={onClick} />}
    </div>
  );
}
