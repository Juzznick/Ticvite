import './MainScreen.css'
function MainScreen () {
    return(
        <div className="maindiv  flex items-center justify-center" >
            <div className='grid grid-cols-3 grid-rows-2 gap-10'>
                <div className='bg-[#ECE8C5] h-[25vw] w-[25vw] rounded-4xl'>-</div>
                <div className='bg-[#ACB695] h-[25vw] w-[25vw] rounded-4xl'>-</div>
                <div className='grid grid-cols-1 grid-rows-2 gap-10'>
                    <div className='bg-[#D4AD81] w-[25vw] rounded-4xl'>-</div>
                    <div className='bg-[#E75C43]  w-[25vw] rounded-4xl'>-</div>
                </div>
                <div className='bg-[#E79B43] h-[18vw] col-span-3 rounded-4xl '>-</div>
            </div>
        </div>
        
    );
}

export default MainScreen;