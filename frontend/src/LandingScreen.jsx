import Navbar from "./components/Navbar";
import Features from "./components/features";
import Home from "./components/Home";
import Footer from "./components/Footer";

const LandingScreen = () => {
    return (
        <div >
            <Navbar/>
            <Home/>
            <Features />
            <Footer/>
        </div>

    );
}

export default LandingScreen;