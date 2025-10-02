import { useState, useEffect } from 'react';
import './MainScreen.css'
function MainScreen () {


    const [time, setTime] = useState("hey");
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime("8:30");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return(
        <div className="maindiv  flex items-center justify-center" >
            <div className='grid grid-cols-3 grid-rows-2 gap-10'>
                <div className='bg-[#ECE8C5] h-[25vw] w-[25vw] rounded-4xl'>-</div>
                <div className='bg-[#ACB695] h-[25vw] w-[25vw] rounded-4xl'>-</div>
                <div className='grid grid-cols-1 grid-rows-2 gap-10'>
                    <div id="time" className='bg-[#D4AD81] w-[25vw] rounded-4xl flex items-center justify-center'>
                        <h1 className='text-9xl text-[#404040]'>{time}</h1></div>
                    <div className='bg-[#E75C43]  w-[25vw] rounded-4xl'>-</div>
                </div>
                <div className='bg-[#E79B43] h-[18vw] col-span-3 rounded-4xl '>-</div>
            </div>
        </div>
        
    );


}

export default MainScreen;