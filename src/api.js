const apiServer = "https://nc-news-be-proj.onrender.com/api";

const Api = {
  articles: `${apiServer}/articles`,
};

export function get_articles() {
  return `${Api.articles}`;
}
//"https://nc-news-be-proj.onrender.com/api/articles"
