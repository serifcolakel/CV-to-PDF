import { Rating } from "@mui/material";
import React from "react";
const skills = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 4 },
  { name: "JavaScript", level: 3 },
  { name: "TailwindCSS", level: 4 },
  { name: "SASS", level: 3 },
  { name: "React", level: 3 },
  { name: "NextJS", level: 3 },
  { name: "Redux", level: 2 },
  { name: "NodeJS", level: 2 },
  { name: "Express", level: 2 },
  { name: "MongoDB", level: 2 },
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
