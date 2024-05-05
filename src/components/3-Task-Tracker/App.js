import React from 'react';
import { useState } from 'react';
import AddTask from './Task-Tracker-Components/AddTask';
import ToDo from './Task-Tracker-Components/ToDo';

function App() {
    const[taskList, setTaskList] = useState([]);



    return (
        <div>
        <h1 className='text-3xl font-bold py-6 pl-6'>The Task Tracker</h1>
        <p className='text-xl pl-6'>Hi there!</p>
        <div className='flex flex-row items-center'>
            <p className='text-xl pl-6'>Click</p>
            <AddTask
                taskList = {taskList}
                setTaskList = {setTaskList}
             />
            <p className='text-xl my-2'>to add a new task</p>
        </div>

        <div>
            <h2 className='ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-2 bg-gray-300'>To Do: </h2>
            {taskList.map((task, i)=>
            <>
                <ToDo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
            </>
        )}
        </div>

        </div>
    );
  };
   
  export default App;






