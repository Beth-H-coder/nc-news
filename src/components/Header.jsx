import { useContext } from "react";
import UserProfileContext from "../userProfile/UserProfileContext";
import { Link } from "react-router-dom";
function Header() {
  const userProfile = useContext(UserProfileContext);
  return (
    <header className="bg-gray-800 py-12 pb-2 px-20">
      <Link to="/" className="text-red-500 text-7xl font-semibold">
        <h1>Northcoders News</h1>
      </Link>
      <div>
        <h3 className="text-sm font-semibold p-3 text-gray-200">
          Logged in as {userProfile.username}
        </h3>
      </div>
    </header>
  );
}

export default Header;
