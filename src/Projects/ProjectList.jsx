import mitsuru from '../assets/projectCharacters/overview/mitsuru.png';
import mitsuruPortrait from '../assets/projectCharacters/fullPortrait/mitsuruPortrait.png';
import mitsuruShadow from '../assets/projectCharacters/shadow/mitsuruShadow.png';
import junpei from '../assets/projectCharacters/overview/junpei.png';
import junpeiPortrait from '../assets/projectCharacters/fullPortrait/junpeiPortrait.png';
import junpeiShadow from '../assets/projectCharacters/shadow/junpeiShadow.png';
import yukari from '../assets/projectCharacters/overview/yukari.png';
import yukariPortrait from '../assets/projectCharacters/fullPortrait/yukariPortrait.png';
import yukariShadow from '../assets/projectCharacters/shadow/yukariShadow.png';
import aki from '../assets/projectCharacters/overview/aki.png';
import akiPortrait from '../assets/projectCharacters/fullPortrait/akiPortrait.png';
import akiShadow from '../assets/projectCharacters/shadow/akiShadow.png';

export const projects = [
    {
        id: 1,
        name: "Persona style personal website",
        tools: "React, Git",
        date: "Jul 2026 -",
        details: "My personal website inspired by the Persona video game series, built with React and Git.",
        image: mitsuru,
        portrait: mitsuruPortrait,
        shadow: mitsuruShadow
    },
    {
        id: 2,
        name: "Data analysis and text-chat subsystem",
        tools: "Laravel, React, Git, Google Cloud Platform",
        date: "Feb 2026 - May 2026",
        details: "Team project on data analysis and text-chat subsystem for a project management web application, developed using Laravel in backend and React in frontend, with version control managed through Git. System includes data analysis and visualization using Chart.js, and a text-chat system for users to communicate with others in real-time. While hosting the website on Google Cloud Platform.",
        image: junpei,
        portrait: junpeiPortrait,
        shadow: junpeiShadow
    },
    {
        id: 3,
        name: "Project Management System",
        tools: "React, Git, XAMPP, MySQL, Google Cloud Platform",
        date: "Oct 2025 - Feb 2026", 
        details: "Team project on a web project management system, developed using React in frontend and XAMPP with MySQL in backend, with version control managed through Git. System includes graphs using Chart.js, and a forum for users to discuss and share topics. While hosting the website on Google Cloud Platform.",
        image: yukari,
        portrait: yukariPortrait,
        shadow: yukariShadow
    },
    {
        id: 4,
        name: "Budget Pilot Mobile App",
        tools: "Kotlin, Java, Android Studio",
        date: "Feb 2026 - May 2026",
        details: "A personal finance app designed to help people track their income and expenses, monitor spending habits, and stay within a budget. Include 3 distinct screens, database using Room database, draft a budget report and open an email client to send the report, a notification system to remind users if they near or exceed their budget, and AI spending indsight using Gemini API.",
        image: aki,
        portrait: akiPortrait,
        shadow: akiShadow
    }

];  