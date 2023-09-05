import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";
import UserProfileContext from "./userProfile/UserProfileContext";
import UserProfile from "./userProfile/UserProfile";
import ArticlePage from "./components/ArticlePage";

function App() {
  const userProfile = UserProfile;

  return (
    <UserProfileContext.Provider value={UserProfile}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </UserProfileContext.Provider>
  );
}

export default App;
