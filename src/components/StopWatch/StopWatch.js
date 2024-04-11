import React, { useEffect, useState } from 'react';

export default function StopWatch(){
    // the "number" of time
    const[time,setTime] = useState(0)
    // the "on and off switch"
    const[runTime,setRunTime] = useState(false)

    useEffect(()=>{
        let interval;
        if(runTime){
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime + 10);
            }, 10);
        }else if(!runTime){
            clearInterval(interval);
        } 
        return ()=> clearInterval(interval);
    }, [runTime]);

    return(
        <div className='flex flex-col items-center justify-center py-8'>
            <h1 className='text-2xl font-semibold'>Stop Watch</h1>
            <div className='text-xl font-semibold py-4'>
                <span>{("0"+Math.floor((time/60000)%60))}: </span>
                <span>{("0"+Math.floor((time/1000)%60))}: </span>
                <span>{("0"+((time/10)%100))}</span>
            </div>
            <div className='w-1/3 max-w-sm flex flex-row justify-evenly'>
                <button className='border rounded-lg py-1 px-2.5' onClick={()=>setRunTime(true)}>Start</button>
                <button className='border rounded-lg py-1 px-3' onClick={()=>setRunTime(false)}>Stop</button>
                <button className='border rounded-lg py-1 px-2.5' onClick={()=>setTime(0)}>Reset</button>
            </div>

        </div>
    );
}