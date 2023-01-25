import Navbar from "./layout/Navbar";
import React, {useEffect} from "react";
import "./components/style.css"
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <div>
            <Navbar className="body"/>
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
        </div>


    );
}

export default App;
