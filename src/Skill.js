import { Rating, Typography } from "@mui/material";
import React from "react";
const skills = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 4 },
  { name: "JavaScript", level: 4 },
  { name: "Matlab", level: 4 },
  { name: "Python", level: 3 },
  { name: "C++", level: 3 },
  { name: "React", level: 4 },
  { name: "Redux", level: 3 },
  { name: "NodeJS", level: 3 },
  { name: "Express", level: 3 },
  { name: "MongoDB", level: 2 },
  { name: "GitHub", level: 4 },
];
export default function Skill() {
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="skills">
          <Typography>{skill.name}</Typography>
          <Rating value={skill.level} readOnly />
        </div>
      ))}
    </>
  );
}