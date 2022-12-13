import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "./Footer";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
                <Box display="flex" justifyContent="center" width="100%">
                    <Tabs
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        centered={true}
                    >
                        <Tab label="About" {...a11yProps(0)}/>
                        <Tab label="Education & Skills" {...a11yProps(1)} />
                        <Tab label="Projects" {...a11yProps(2)} />
                        <Tab label="Contact" {...a11yProps(3)} />
                    </Tabs>
                </Box>
            </AppBar>
            <TabPanel value={value} index={0}>
                <About/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Skills isAdvisorView={false}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Projects/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Contact/>
            </TabPanel>
            <Footer/>

        </div>
    );
}

export default Navbar;
