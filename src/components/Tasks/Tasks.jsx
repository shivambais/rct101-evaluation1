import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

// import 

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  let tasks= props.multasks
  // console.log(tasks)

  // let numbers= [0,1,2,3,4,5]


  // let els = tasks.map((ele)=>
  //   <li key={ele.toString()}>{ele}</li>
  // )
  
  let els = tasks.map((ele)=>
   <Task key={ele+"key"} intask={ele}></Task>
)
 
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        
        {els}




      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
