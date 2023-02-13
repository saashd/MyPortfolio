import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import LandingPage from "./pages/LandingPage";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {backgroundOptions} from "./components/background/Background";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };
    return (
        <div>
            <LandingPage/>
            <Particles id="particles-here" init={particlesInit} options={
                backgroundOptions
            }/>
        </div>
    );
}

export default App;
