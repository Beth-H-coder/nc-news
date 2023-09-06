import { useContext } from "react";
import UserProfileContext from "../userProfile/UserProfileContext";
import { Link } from "react-router-dom";
function Header() {
  const userProfile = useContext(UserProfileContext);
  return (
    <section className="Header">
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <em>
        <p>Logged in as {userProfile.username}</p>
      </em>
    </section>
  );
}

export default Header;
