const remoteURL = "http://localhost:5002";

export default {
  getNews(id) {
    return fetch(`${remoteURL}/news/${id}`).then(result => result.json());
  },

  getAllNews(id) {
    return fetch(`${remoteURL}/news?userId=${id}`).then(result => result.json());
  },

  postNewNews(newNews) {
    return fetch(`${remoteURL}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNews)
    }).then(data => data.json());
  },

  editNews(editedNewsObj, editedNewsId) {
    return fetch(`${remoteURL}/news/${editedNewsId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedNewsObj)
    }).then(data => data.json());
  },
  deleteNews(id) {
    return fetch(`${remoteURL}/news/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
};
