import { Rating } from "@mui/material";
import React from "react";
import Form from "../Form";
import { Skills } from "../Yups";
export default function Skill() {
  const [skills] = React.useState(JSON.parse(localStorage.getItem("Skills")));
  return (
    <>
      {skills !== null ? (
        <div className="flex flex-col gap-y-4 py-4">
          {skills.map((skill, index) => (
            <div
              className="flex flex-row text-white px-4 gap-x-4 items-center w-full"
              key={index}
            >
              <span className="pr-10 w-[30%]">{skill.skillName}</span>
              <Rating value={Number(skill.skillLevel)} readOnly />
            </div>
          ))}
        </div>
      ) : (
        <Form yups={Skills} isIcon="t" />
      )}
    </>
  );
}
