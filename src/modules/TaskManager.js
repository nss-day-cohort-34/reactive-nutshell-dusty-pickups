const remoteURL = "http://localhost:5002"

export default {
    
    getAllTasks() {
        return fetch(`${remoteURL}/tasks`).then(result => result.json())
      },

    postNewTask(newTask) {
        return fetch(`${remoteURL}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTask)
        }).then(data => data.json())
      },
}