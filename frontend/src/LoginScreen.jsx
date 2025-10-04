import './index.css'
const LoginScreen = () => {
    return (
        <div className="flex justify-center items-center w-screen">
            <div className="bg-[#ACB695] h-[85vh] w-[80vw] rounded-2xl flex items-center justify-around">
                <div className="flex justify-center items-center">
                    <img src="/images/login-sideimg.png" className="rounded-3xl h-[75vh] " />
                </div>
                <div className="flex justify-evenly items-center flex-col border-white border-2 h-[75vh] w-[25vw] rounded-3xl">
                    <div className='flex flex-col items-center '>
                        <h1 className="font-ephesis text-6xl">Welcome back!</h1>
                        <h3 className='font-ephesis text-2xl'>please enter your credentials</h3>
                    </div>

                    <div>
                        <h4 className='font-inter'>Email</h4>
                        <input></input> <br/>
                        <h4 className='font-inter'>Password</h4>
                        <input></input>
                    </div>

                    <div>
                        <button className='bg-emerald-600 rounded-3xl pt-2 pb-2 pl-10 pr-10 cursor-pointer'>Login</button>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default LoginScreen;