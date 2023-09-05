const apiServer = "https://nc-news-be-proj.onrender.com/api";

const Api = {
  articles: `${apiServer}/articles`,
};

export function getArticles() {
  return `${Api.articles}`;
}

export function getArticle(id) {
  return `${Api.articles}/${id}`;
}

export function getComments(id) {
  return `${Api.articles}/${id}/comments`;
}

export function voteOnArticle(id) {
  return `${Api.articles}/${id}`;
}

//  const apiServer = axios.create({"baseURL: https://nc-news-be-proj.onrender.com/api"});

//  apiServer.get('/articles')
