const technologies = [
    {
        name: "PYTHON",
        url: require('./icons/python.png')
    },
    {
        name: "JAVASCRIPT",
        url: require('./icons/js.png')
    },
    {
        name: "REACT.JS",
        url: require('./icons/react.png')
    },

    {
        name: "NODE.JS",
        url: require('./icons/node-js.png')
    },
    {
        name: "FLASK",
        url: require('./icons/flask.png')
    },
    {
        name: "SQLALCHEMY",
        url: require('./icons/sqla.png')
    },
    {
        name: "HTML5",
        url: require('./icons/html5.png')
    },
    {
        name: "CSS3",
        url: require('./icons/css3.png')
    },
    {
        name: "MYSQL",
        url: require('./icons/mysql.png')
    },
    {
        name: "SQLITE",
        url: require('./icons/sqlite.png')
    },
    {
        name: "MONGODB",
        url: require('./icons/mongodb.png')
    },
    {
        name: "FIREBASE",
        url: require('./icons/fb.png')
    },


];

const projects = [
    {
        title: "Course Management Platform",
        subtitle: "Final Project IE faculty",
        description:
            "<p>A web application for advisors and students. Currently serving over 100 students and advisors each semester.</p>" +
            "<p>● Backend in Python (Flask, SQLAlchemy), Frontend in Javascript (React)," +
            "Firebase for SSO and persisting key-value (Json) data, MySQL for " +
            "persisting internal table-based data.</p>" +
            "<p>● Best project award in 2021.</p>",
        link: "https://cpms.alexdruzina.com",
        github: "https://github.com/saashd/CPMS"
    },
    {
        title: "Health Tracker App",
        subtitle: "IOT Project for Android",
        description:
            "<p>A mobile application for health traking. Used Arduino to track steps during a walk or a run together with route, and to track vital signs.</p>" +
            "<p>● Technologies: Java, Google APIs, Firebase.</p>" +
            "<p>● Demonstration video can be found in GitHub repo.</p>",
        github: "https://github.com/saashd/IOT-Project"
    },
    {
        title: "E-commerce App",
        subtitle: "MERN Stack (MongoDB, Express, React, and Node.js) Plant Shop App ",
        description:
            "<p>The goal of this project is to create a shopping cart application " +
            "for customers and to learn about the technologies involved in creating such an application.</p>" +
            "<p>It has a server side built using MongoDB, Mongoose, and Express " +
            "and a client side developed with React, Redux, JavaScript, and Material UI." +
            "Payments are accepted using Stripe.</p>",
        link: "https://plants.alexdruzina.com/",
        github: "https://github.com/saashd/e-commerce-app"
    },
    {
        title: "Todo App",
        subtitle: "Web-based task management application for managing tasks on a daily basis",
        description:
            "<p>Application built using the MERN stack (MongoDB, Express, React, and Node.js)." +
            "<p>It features a client side built with React, Redux, TypeScript, and Material UI, and a " +
            "server side using MongoDB, Mongoose, and Express.</p>",
        link: "https://todo.alexdruzina.com",
        github: "https://github.com/saashd/todo-app"
    },
    {
        title: "Meme Generator",
        subtitle: "",
        description:
            "<p>Web App for creating custom memes by selecting an image and adding custom text.</p>" +
            "<p>● Technologies:  JavaScript, React, Material UI</p>",
        link: "https://stellular-jelly-eaf7b4.netlify.app",
        github: "https://github.com/saashd/meme_generator"
    },
    {
        title: "ML Project",
        subtitle: "",
        description:
            "<p>Project following “ControlVAE: Tuning, Analytical Properties, and Performance Analysis” paper.</p>",
        github: "https://github.com/saashd/controlVAE",
    },

];


export {technologies, projects}