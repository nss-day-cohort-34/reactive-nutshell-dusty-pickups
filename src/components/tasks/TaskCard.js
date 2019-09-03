import React, { Component } from "react";
import TaskEditModal from "./TaskEditModal";


class TaskCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Task: <b>{this.props.task.taskName}</b>
          </h3>
          <p>Date: {this.props.task.taskDate}</p>
          {/* <input type="checkbox" {...props} /> */}
          {/* with spread operator, whatever is passed into animal card is now being passed to task edit modal including taskobj and edit function */}
          <TaskEditModal {...this.props} />{" "}
          <button
            type="button"
            onClick={() => this.props.deleteTask(this.props.task.id)}
          >
            Delete Task
          </button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
