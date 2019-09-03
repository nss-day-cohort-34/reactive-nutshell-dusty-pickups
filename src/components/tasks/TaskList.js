import React, { Component } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";

class TaskList extends Component {
  //define what this component needs to render
  state = {
    tasks: []
  };

  componentDidMount() {
    console.log("TASK LIST: ComponentDidMount");

    TaskManager.getAllTasks().then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  }

  deleteTask = id => {
    TaskManager.deleteTasks(id).then(() => {
      TaskManager.getAllTasks().then(tasks => {
        this.setState({
          tasks: tasks
        });
      });
    });
  };

  renderTasks() {
    console.log("TASK LIST: render");

    return (
      <React.Fragment>
        <section className="button__container">
          <button type="button" className="btn" onclick={() => {}}>
            Add New Task
          </button>
        </section>
        <div className="cards__container">
          {this.state.tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={this.deleteTask}
              {...this.props}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
