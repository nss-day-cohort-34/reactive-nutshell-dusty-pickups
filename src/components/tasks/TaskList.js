import React, { Component } from "react";
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";
import TaskAddModal from "./TaskAddModal";

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

  // deleteTask = id => {
  //   TaskManager.deleteTasks(id).then(() => {
  //     TaskManager.getAllTasks().then(tasks => {
  //       this.setState({
  //         tasks: tasks
  //       });
  //     });
  //   });
  // };

  render() {
    console.log("TASK LIST: render");

    return (
      <React.Fragment>
        <section className="button__container">
          <TaskAddModal addTask={this.addTask} />
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

export default TaskList;
