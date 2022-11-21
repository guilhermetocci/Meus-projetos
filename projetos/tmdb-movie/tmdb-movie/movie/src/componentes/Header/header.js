import { LightPurpleBackground, Logo } from "./styled";
import TmdbLogo from "../../imgs/Vector.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <LightPurpleBackground>
      <Link to={"/"}>
      <Logo src={TmdbLogo} alt="Logo" /></Link>
    </LightPurpleBackground>
  );
};

export default Header;
