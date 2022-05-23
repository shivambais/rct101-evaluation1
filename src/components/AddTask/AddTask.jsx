import React from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair

  const [intask, setintask] = React.useState("");

  let addtask=(e)=>{
    setintask(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..."  onInput={e=>{addtask(e)}} />
      <button data-cy="add-task-button"  onClick={()=>{props.pushTasks(intask)}}>+</button>
    </div>
  );
};

export default AddTask;
