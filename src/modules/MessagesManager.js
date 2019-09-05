const remoteURL = "http://localhost:5002";

export default {
    getMessage(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(result => result.json());
    },
// when you call this function you will get the messages and the user object with it so you can access the user username
    getAllMessages() {
        return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json()).then((data) => {
            console.log(data)
            return data
        })
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

    editMessage(editedMessageObj, editedMessageId) {
        return fetch(`${remoteURL}/messages/${editedMessageId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessageObj)
        }).then(data => data.json());
    },
};