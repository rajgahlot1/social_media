import {faRss, faComments, faPlay, faUsers, faBookmark, faQuestionCircle, faBriefcase, faCalendarAlt, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import farmer1 from './images/farmer1.jpg'
import farmer2 from './images/farmer2.jpg'
import farmer3 from './images/farmer3.jpg'
import farmer4 from './images/farmer4.jpg'
import farmer5 from './images/farmer5.jpg'
import farmer6 from './images/farmer6.jpg'
import farmer7 from './images/farmer7.jpg'
import post1 from './images/post1.jpg'
import post2 from './images/post2.jpg'
import post3 from './images/post3.jpg'
import post4 from './images/post4.jpg'
import post5 from './images/post5.jpg'
import post6 from './images/post6.jpg'
import post7 from './images/post7.jpg'
const homedata= [
    {icon:faRss,
        name:"Feed"
    },
    {icon:faComments,
        name:"Chats"
    },
    {icon:faPlay,
        name:"Videos"
    },
    {icon:faUsers,
        name:"Groups"
    },
    {icon:faBookmark,
        name:"Bookmarks"
    },
    {icon:faQuestionCircle,
        name:"Questions"
    },
    {icon:faBriefcase,
        name:"Jobs"
    },
    {icon:faCalendarAlt,
        name:"Emails"
    },
    {icon:faGraduationCap,
        name:"Courses"
    },
]
const farmerdata = [
    {
        farmername: "Rama Kumari",
        farmerlogo: farmer1,
        time: '10 seconds ago',
        sentence: 'Cultivate kindness in the field of life.',
        likes: 15,
        comments: 3,
        post: post1,
        quote: 'Stay positive',
        city: 'New York',
        from: 'Madrid',
        status: 'In a relationship',
        question: 'What inspires you the most, Rama Kumari?'
    },
    {
        farmername: "Shyam Lal",
        farmerlogo: farmer2,
        time: '2 minutes ago',
        sentence: 'Show love and reap happiness.',
        likes: 30,
        comments: 5,
        post: post2,
        quote: 'Keep going',
        city: 'Los Angeles',
        from: 'Barcelona',
        status: 'Married',
        question: 'What is your favorite travel destination, Shyam Lal?'
    },
    {
        farmername: "Kriti Rani",
        farmerlogo: farmer3,
        time: '5 minutes ago',
        sentence: 'In the seeds of today lie the harvest of tomorrow.',
        likes: 25,
        comments: 3,
        post: post3,
        quote: 'Dream big',
        city: 'Chicago',
        from: 'Berlin',
        status: 'Single',
        question: 'If you could have dinner with any historical figure, who would it be, Kriti Rani?'
    },
    {
        farmername: "Rajnita",
        farmerlogo: farmer4,
        time: '20 minutes ago',
        sentence: 'Nurture your dreams like a farmer tends to the crops.',
        likes: 45,
        comments: 4,
        post: post4,
        quote: 'Never quit',
        city: 'Houston',
        from: 'Paris',
        status: 'Married',
        question: "What's your favorite way to spend a weekend, Rajnita?"
    },
    {
        farmername: "Lal Singh",
        farmerlogo: farmer5,
        time: '1 hour ago',
        sentence: 'Hard work in the field yields the sweetest fruits.',
        likes: 35,
        comments: 6,
        post: post5,
        quote: 'Stay strong',
        city: 'Phoenix',
        from: 'Rome',
        status: 'Married',
        question: "What's your go-to comfort food, Lal Singh?"
    },
    {
        farmername: "Neha Singh",
        farmerlogo: farmer6,
        time: '2 hours ago',
        sentence: 'Every seed planted is a step towards a better future.',
        likes: 40,
        comments: 7,
        post: post6,
        quote: 'Be kind',
        city: 'Philadelphia',
        from: 'London',
        status: 'In a relationship',
        question: 'If you could learn any new skill overnight, what would it be, Neha Singh?'
    },
    {
        farmername: "Charu",
        farmerlogo: farmer7,
        time: '3 hours ago',
        sentence: 'Farming is the soul of the earth and the hope of the future.',
        likes: 50,
        comments: 8,
        post: post7,
        quote: 'Carpe diem',
        city: 'San Antonio',
        from: 'Tokyo',
        status: 'Married',
        question: "What's your favorite book or movie, Charu?"
    }
];


export  {farmerdata,homedata}