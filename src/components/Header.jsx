import { useContext } from "react";
import UserProfileContext from "../userProfile/UserProfileContext";

function Header() {
  const userProfile = useContext(UserProfileContext);
  return (
    <section className="Header">
      <h1>NC News</h1>
      <h2>Subtitle in Header Component</h2>
      <p>Logged in as {userProfile.username} in Header Component</p>
    </section>
  );
}

export default Header;
