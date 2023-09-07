const apiServer = "https://nc-news-be-proj.onrender.com/api";

const api = {
  articles: `${apiServer}/articles`,
  topics: `${apiServer}/topics`,
  comments: `${apiServer}/comments`,
  users: `${apiServer}/users`,
};

export function getArticlesUrl() {
  return `${api.articles}`;
}

export function getArticleUrl(id) {
  return `${api.articles}/${id}`;
}

export function getCommentsUrl(id) {
  return `${api.articles}/${id}/comments`;
}

export function voteOnArticleUrl(id) {
  return `${api.articles}/${id}`;
}

export function postCommentUrl(id) {
  return `${api.articles}/${id}/comments`;
}

export function getTopicsUrl() {
  return `${api.topics}`;
}

export function deleteCommentUrl(id) {
  return `${api.comments}/${id}`;
}
//  const apiServer = axios.create({"baseURL: https://nc-news-be-proj.onrender.com/api"});

//  apiServer.get('/articles')
