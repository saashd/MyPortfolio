const technologies = [
    {
        name: "python",
        url: require('./icons/python.png')
    },
    {
        name: "js",
        url: require('./icons/js.png')
    },
    {
        name: "reactjs",
        url: require('./icons/react.png')
    },
    {
        name: "flask",
        url: require('./icons/flask.png')
    },
    {
        name: "sqla",
        url: require('./icons/sqla.png')
    },
    {
        name: "html5",
        url: require('./icons/html5.png')
    },
    {
        name: "css3",
        url: require('./icons/css3.png')
    },


];

const projects = [
    {
        title: "CPMS - Course Management Platform",
        subtitle: "Final Project IE faculty",
        description:
            "A web application for advisors and students. Currently serving over 100 students and advisors each semester.\n" +
            "● Backend in Python (Flask, SQLAlchemy), Frontend in Javascript (React)," +
            "Firebase for SSO and persisting key-value (Json) data, MySQL for" +
            "persisting internal table-based data.\n" +
            "● Best project award in 2021.\n" +
            "● GitHub Repo: https://github.com/saashd/CPMS \n" +
            "● Live: https://cpms.iem.technion.ac.il",
        image: require('./icons/icon_cpms.jpg'),
        link: "https://cpms.iem.technion.ac.il/",
    },
    {
        title: "Health Tracker App",
        subtitle: "IOT Project for Android",
        description:
            "A mobile application for health traking. Used Arduino to track steps during a walk or a run together with route, and to track vital signs.\n" +
            "● Technologies: Java, Google APIs, Firebase.\n" +
            "● Demonstration video can be found in GitHub repo.\n" +
            "● GitHub Repo: https://github.com/saashd/IOT-Project",
        image: "",
        link: "https://github.com/saashd/IOT-Project",
    },
    {
        title: "Meme Generator",
        subtitle: "",
        description:
            "Web App for creating custom memes.\n" +
            "● Technologies:  JS,React,Material UI and imgflip \n" +
            "● GitHub Repo: https://github.com/saashd/meme_generator \n" +
            "● Live Demo: https://stellular-jelly-eaf7b4.netlify.app",
        image: require('./icons/meme.jpg'),
        link: "https://stellular-jelly-eaf7b4.netlify.app",
    },
    {
        title: "ML Projects",
        subtitle: "",
        description:
            "Project following “ControlVAE: Tuning, Analytical Properties, and Performance Analysis” paper \n" +
            "● GitHub Repo: https://github.com/saashd/controlVAE",
        image: "",
        link: "https://github.com/saashd/controlVAE",
    },

];

export {technologies, projects}