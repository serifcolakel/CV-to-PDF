import { Rating } from "@mui/material";
import React from "react";
const skills = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 4 },
  { name: "JavaScript", level: 4 },
  { name: "TypeScript", level: 3 },
  { name: "TailwindCSS", level: 4 },
  { name: "SASS", level: 4 },
  { name: "React", level: 4 },
  { name: "React Native", level: 4 },
  { name: "NextJS", level: 4 },
  { name: "Redux", level: 3 },
  { name: "pm2 for Deployment React/NextJS project", level: 3 },
  { name: "Nginx for Deployment & proxy_pass", level: 3 },
  { name: "Jenkins for CI/CD", level: 2 },
  { name: "Material-UI", level: 4 },
  { name: "Ant Desing", level: 4 },
  { name: "PrimeReact", level: 4 },
  { name: "NodeJS", level: 3 },
  { name: "Express", level: 3 },
  { name: "MongoDB", level: 3 },
  { name: "GitHub", level: 4 },
  { name: "Matlab", level: 4 },
  { name: "Python", level: 3 },
  { name: "C++", level: 3 },
];
export default function Skill() {
  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-row text-black px-4 gap-x-4 items-center w-full"
        >
          <span className="text-left w-[30%]">{skill.name}</span>
          <Rating value={skill.level} readOnly />
        </div>
      ))}
    </>
  );
}
