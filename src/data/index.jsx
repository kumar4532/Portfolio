import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hey, It's Krantikumar 👋",
  initials: "TV",
  location: "Maharashtra, India",
  description:
    "Self Taught Full Stack Developer.",
  summary:
    "A college graduate having a degree in electrical engineering but got interested in computers and coding that started learning coding by himself. After graduating I have started my coding journey and I have improved the skills that I have with various courseworks as well as creating project. My expertise span over some powerful tech stacks such as MERN as well as some tools. When I'm not coding, I'm learning something new.",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "Redux Toolkit",
    "Mongo DB",
    "Git/GitHub",
    "Vite",
    "VS Code"
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kumar4532",
        icon: <FaGithubSquare />,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kumar6345",
        icon: <FaSquareXTwitter />,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:krantikumar2001@gmail.com",
        icon: <MdEmail />,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1MZA6yj1RcSfFxLS_MfiI6vg4BXh--LlX/view?usp=sharing",
        icon: <FaFileDownload />,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Digital Microsys",
      href: "",
      badges: [],
      location: "Kolhapur",
      title: "Java Developer Trainee",
      start: "July 2023",
      end: "Nov 2023",
      description:
        "As a Java Developer, I have worked on creating backend of e-commerce website as well as frontend for the best user experience. Worked with J2EE technologies to create backend which was used to store the data into an oracle database as well as used Html, css and vanilla Javascript to create better UI.",
    },
  ],
  projects: [
    {
      title: "GamersZone",
      href: "https://gamerszone.vercel.app/",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "A react based blog posting website where you can create and post blogs related to games and entertainment. Used appwrite which provide backend as service for storing and auth purposes.",
      technologies: [
        "React.js",
        "Javascript",
        "Appwrite",
        "TailwindCSS",
        "Redux",
        "Next-Auth"
      ],
      links: [
        {
          type: "Website",
          href: "https://gamerszone.vercel.app/",
          icon: ""
        },
      ],
      image: "./gamerszone.jpg",
    },
    {
      title: "TweetTube",
      href: "https://github.com/kumar4532/TweetTube",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "A complete backend of features of twitter and youtube where you can post videos and tweet. You can also edit these and delete them also you can like the tweets and videos as well. ",
      technologies: [
        "Node.js",
        "Javascript",
        "Mongo DB",
        "Mongoose",
        "Express.js",
        "Postman"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kumar4532/TweetTube",
          icon: '',
        },
      ],
      image: "./github.jpg",
    },
  ],
};