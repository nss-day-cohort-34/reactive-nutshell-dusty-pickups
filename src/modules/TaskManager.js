const remoteURL = "http://localhost:5002";

export default {
  getTask(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json());
  },

  getAllTasks(id) {
    return fetch(`${remoteURL}/tasks?userId=${id}`).then(result =>
      result.json()
    );
  },

  postNewTask(newTask) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(data => data.json());
  },

  editTask(editedTaskObj, editedTaskId) {
    return fetch(`${remoteURL}/tasks/${editedTaskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTaskObj)
    }).then(data => data.json());
  },

  deleteTask(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  }
};
