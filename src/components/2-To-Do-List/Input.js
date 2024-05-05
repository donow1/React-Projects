import React, { useState } from "react";

const Input = ({taskList, setTaskList})=>{

    const[input, setInput] = useState("")


    const handleAddTask = (e)=>{
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }
//Questions about function handleAddTask:
// why do we need "e"?
//in setTaskList([...taskList, input]); what do "...taskList" and "input" stand for?
// what kind of value does "handleAddTask" create/pass? to whom?


    return (
        <form className="flex flex-row items-center gap-3">
            <input
                className="border rounded-lg py-1.5 px-2 text-lg"
                type="text"
                placeholder="Add a task"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            
            ></input>
            
            <button
            className="bg-violet-400 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70"
            onClick={handleAddTask}
            >Add</button>

        </form>
    );
}
export default Input;











