import './index.css'
const LoginScreen = () => {
    return (
        <div className="flex justify-center items-center w-screen">
            <h1 className='rotate-270 font-ericaone text-[12rem] text-litegreen absolute -left-30'>LOGIN</h1>
            <div className="bg-litegreen h-[85vh] w-[70vw] rounded-2xl flex items-center justify-around relative">
                <div className="flex justify-center items-center">
                    <img src="/images/login-sideimg.png" className="rounded-3xl h-[75vh] " />
                </div>
                <div className="flex justify-evenly items-center flex-col border-white border-1 h-[75vh] w-[25vw] rounded-3xl">

                    <div className='flex flex-col items-center '>
                        <h1 className="font-ephesis text-6xl">Welcome back!</h1>
                        <h3 className='font-ephesis text-2xl'>please enter your credentials</h3>
                    </div>

                    <form className='flex flex-col justify-center w-[70%]'>
                        <label className='font-inter text-sm'>Email</label>
                        <input className='bg-gray-200/50 h-10 text-gray-500 text-sm pl-2' placeholder='Enter your email'></input>
                        <br />
                        <label className='font-inter text-sm'>Password</label>
                        <input type='password' className='bg-gray-200/50 h-10 text-gray-500 text-sm pl-2' placeholder="Enter your password"></input>
                        <button className='bg-retrogreen rounded-sm mt-10 pt-2 pb-2 w-auto cursor-pointer'>Login</button>
                    </form>

                    <h4 className='font-inter text-sm'>Don't have an account? <a href="/signup"><span className='font-bold cursor-pointer'>Sign Up</span></a></h4>

                </div>
            </div>
        </div>


    );
}

export default LoginScreen;