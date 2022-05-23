import React from "react";

import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";


import styles from "./taskApp.module.css";


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  // const [intask, setintask] = React.useState("");

  const [multasks, setmultasks] = React.useState([])
  // console.log(multasks)

let pushTasks=(intask)=>{
  if(intask!==""){
    let arr= [...multasks]
    var flag=false;

    for(let i=0;i<arr.length;i++){
      if (arr[i]==intask){
        flag= true;
      }
    }
    if(flag==false){
      setmultasks([...multasks,intask])
    }
    
  }
 
}

let deletetask=(key)=>{
  let arr= [...multasks];
  arr.filter((ele)=>{return ele!=key})

  setmultasks([...arr])
}

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader></TaskHeader>

      {/* Add Task */}
      <AddTask pushTasks={pushTasks}></AddTask>

      {/* Tasks */}
      <Tasks multasks={multasks} deletetask={deletetask} ></Tasks>
    </div>
  );
};

export default TaskApp;
