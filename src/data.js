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
    {
        name: "mysql",
        url: require('./icons/mysql.png')
    },
    {
        name: "sqlite",
        url: require('./icons/sqlite.png')
    },
    {
        name: "mongodb",
        url: require('./icons/mongodb.png')
    },
    {
        name: "firebase",
        url: require('./icons/fb.png')
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
            "● Best project award in 2021.\n",
        image: require('./icons/icon_cpms.jpg'),
        link: "https://cpms.alexdruzina.com",
        github: "https://github.com/saashd/CPMS"
    },
    {
        title: "Health Tracker App",
        subtitle: "IOT Project for Android",
        description:
            "A mobile application for health traking. Used Arduino to track steps during a walk or a run together with route, and to track vital signs.\n" +
            "● Technologies: Java, Google APIs, Firebase.\n" +
            "● Demonstration video can be found in GitHub repo.\n",
        image: "",
        github: "https://github.com/saashd/IOT-Project"
    },
    {
        title: "Todo App",
        subtitle: "Web-based task management application for managing tasks on a daily basis",
        description:
            "Application built using the MERN stack (MongoDB, Express, React, and Node.js).\n" +
            "It features a client side built with React, Redux, TypeScript, and Material UI, and a\n" +
            "server side using MongoDB, Mongoose, and Express.",
        image: "",
        link: "https://todo.alexdruzina.com",
        github: "https://github.com/saashd/todo-app"
    },
    {
        title: "Meme Generator",
        subtitle: "",
        description:
            "Web App for creating custom memes by selecting an image and adding custom text.\n" +
            "● Technologies:  JS,React,Material UI and imgflip",
        image: require('./icons/meme.jpg'),
        link: "https://stellular-jelly-eaf7b4.netlify.app",
        github: "https://github.com/saashd/meme_generator"
    },
    {
        title: "ML Project",
        subtitle: "",
        description:
            "Project following “ControlVAE: Tuning, Analytical Properties, and Performance Analysis” paper",
        image: "",
        github: "https://github.com/saashd/controlVAE",
    },

];

export {technologies, projects}