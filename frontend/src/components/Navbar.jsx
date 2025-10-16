const Navbar = () => {
    return(
        <div className="flex justify-center items-center bg-amber-50 top-0 sticky p-2 ">
                <nav className="flex justify-center ">
                    <ul className="flex w-[75vw] justify-around">
                        <li className="text-white cursor-pointer  bg-[#E79B43] pl-6 pr-6 flex items-center rounded-2xl">Home</li>
                        <a id="features"><li className="text-2xl text-coalblack cursor-pointer">Features</li></a>
                        <li className="text-2xl text-coalblack cursor-pointer">Contribute</li>
                        <a href="/login" className="text-white cursor-pointer bg-[#E75C43] pl-6 pr-6 flex items-center rounded-2xl">
                            <li>Login</li>
                        </a>
                        

                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;