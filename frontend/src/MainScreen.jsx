import { useState, useEffect } from 'react';
import './index.css'
function MainScreen() {


    const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toTimeString().slice(0, 5));
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (

        <div className="flex flex-col items-center justify-evenly  h-screen w-[90vw]" >
            <div className='flex justify-between w-[100%]'>
                <div className='bg-[#ECE8C5] h-[25vw] w-[25vw] rounded-4xl'></div>
                <div className='bg-[#ACB695] h-[25vw] w-[25vw] rounded-4xl'></div>
                <div className='grid grid-cols-1 grid-rows-2 gap-10'>
                    <div id="time" className='bg-[#D4AD81] w-[25vw] rounded-4xl flex items-center justify-center'>
                        <h1 className='text-9xl text-[#404040] font-flubber pt-7'>{time}</h1></div>
                    <div className='bg-[#E75C43]  w-[25vw] rounded-4xl'></div>
                </div>
            </div>
            <div className='bg-[#E79B43] h-[35vh] w-[100%] rounded-4xl '>-</div>
        </div>

    );


}

export default MainScreen;