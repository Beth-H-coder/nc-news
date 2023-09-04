import { useContext } from "react";
import UserProfileContext from "../userProfile/UserProfileContext";

function Header() {
  const userProfile = useContext(UserProfileContext);
  return (
    <section className="Header">
      <h1>NC News</h1>
      <h2>Subitle</h2>
      <p>Logged in as {userProfile.username}</p>
    </section>
  );
}

export default Header;
