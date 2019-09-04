const remoteURL = "http://localhost:5002";

export default {
  getMessage(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(result => result.json());
  },

  getAllMessages() {
    return fetch(`${remoteURL}/messages`).then(result => result.json());
  },

  postNewMessage(newMessage) {
    return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(data => data.json());
  },

  editTask(editedMessageObj, editedMessageId) {
    return fetch(`${remoteURL}/tasks/${editedMessageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessageObj)
    }).then(data => data.json());
  },
};