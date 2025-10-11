import Navbar from "./components/Navbar";
import Features from "./components/features";
import Home from "./components/Home";

const LandingScreen = () => {
    return (
        <div >
            <Navbar/>
            <Home/>
            <Features />
        </div>

    );
}

export default LandingScreen;