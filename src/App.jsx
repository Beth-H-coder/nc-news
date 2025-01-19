//import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import Layout from "./components/Layout";
import Home from "./components/Home";
import Articles from "./components/Articles";
import UserProfileContext from "./userProfile/UserProfileContext";
import UserProfile from "./userProfile/UserProfile";
import ArticleCommentsPage from "./components/ArticleCommentsPage";
import Topic from "./components/Topic";
import NotFound from "./components/NotFound";

function App() {
  const userProfile = UserProfile;

  return (
    <UserProfileContext.Provider value={userProfile}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route
            path="/article/:article_id"
            element={<ArticleCommentsPage />}
          />
          <Route path="/topic/:topic" element={<Topic />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserProfileContext.Provider>
  );
}

export default App;
