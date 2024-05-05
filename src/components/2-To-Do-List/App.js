import React, { useState } from "react";
import Input from './Input';
import Board from "./Board";

function App() {

  const[taskList, setTaskList] = useState([])
  console.log({taskList});


  return (
    <div className="px-12"> 
      <div className="flex flex-col items-center justify-center py-8 gap-4">        
          <h1 className="text-xl font-semibold">To Do Board</h1>
          <Input 
            taskList = {taskList} setTaskList = {setTaskList}
          />
      </div>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
        {taskList.map((task,index)=>
          <Board
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
           />
        )}
      </div>
      {/* Questions about Board component:
      1 about map(), where are the parameters in the () from? 
      2 How does the application know the index is the index rather than other kind of type of varialbes?
      
       */}
    </div>
  );
}
export default App;

