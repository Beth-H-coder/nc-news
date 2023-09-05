const apiServer = "https://nc-news-be-proj.onrender.com/api";

const Api = {
  articles: `${apiServer}/articles`,
};

export function get_articles() {
  return `${Api.articles}`;
}
//"https://nc-news-be-proj.onrender.com/api/articles"
export function get_article(id) {
  return `${Api.articles}/${id}`;
}
//"https://nc-news-be-proj.onrender.com/api/articles/1"
export function get_comments(id) {
  return `${Api.articles}/${id}/comments`;
}
