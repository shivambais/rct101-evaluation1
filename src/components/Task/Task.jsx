import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox"  />
      <div data-cy="task-text" className={styles.task1}>
        <h3>{props.intask}</h3>
      </div>
      {/* Counter here */}
      <Counter className={styles.task2}></Counter>
      <button data-cy="task-remove-button" className={styles.task3}  >X</button>
    </li>
  );
};

export default Task;
