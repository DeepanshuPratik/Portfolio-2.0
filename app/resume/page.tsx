"use client"; 

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';

//about data
const about = {
  title: 'About Me',
  description: 'Lorem ipsum',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Deepanshu Pratik"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7982054591"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "deepanshu.pratik@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    }
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum 2',
  items: [
    {
      company: '',
      position: '',
      duration: ''
    },
    {
      company: '',
      position: '',
      duration: ''
    },
    {
      company: '',
      position: '',
      duration: ''
    },
  ]
};

//education data
const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My education',
  description: 'Lorem ipsum 2',
  items: [
    {
      institution: '',
      degree: '',
      duration: ''
    },
    {
      institution: '',
      degree: '',
      duration: ''
    },
    {
      institution: '',
      degree: '',
      duration: ''
    }
  ]
}

//skills data
const skills = {
  icon: '/assets/resume/badge.svg',
  title: 'My skills',
  description: 'Lorem ipsum 2',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    }
  ]
}

const Resume = () => {
  return (
    <div>
      Resume Page
    </div>
  )
}

export default Resume
