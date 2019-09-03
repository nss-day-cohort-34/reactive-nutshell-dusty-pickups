import React, { Component } from "react";
import { Link } from "react-router-dom"; // delete me if not used

class TaskCard extends Component {
  render() {
    <div className="card">
      <div className="card-content">
        <h3>
          Task: <b>{this.props.task.name}</b>
        </h3>
        <p>Date: {this.props.task.date}</p>
        <input type="checkbox" {...props} />
        <button type="button" onClick={() => {}}>
          Edit
        </button>
        <button
          type="button"
          onClick={() => this.props.deleteTask(this.props.task.id)}
        >
          Delete Task
        </button>
      </div>
    </div>;
  }
}

export default TaskCard;
