const LandingScreen = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <nav className="fixed top-0 flex justify-center mt-5">
                <ul className="flex w-[75vw] justify-around">
                    <li className="text-2xl text-coalblack">Home</li>
                    <li className="text-2xl text-coalblack">Features</li>
                    <li className="text-2xl text-coalblack">Contribute</li>
                    <li className="text-2xl text-coalblack">Login</li>

                </ul>
            </nav>
            <h1 className="font-flubber text-coalblack text-6xl">Focus. Finish. Repeat.</h1>
        </div>

    );
}

export default LandingScreen;