import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { GiGearHammer } from "react-icons/gi";
import { Projects } from "../Yups";
import { Typography } from "@mui/material";
import Form from "../Form";
export default function Project() {
  const [projects] = React.useState(
    JSON.parse(localStorage.getItem("Projects"))
  );
  return (
    <>
      {projects !== null ? (
        <Timeline position="alternate">
          {projects.map((proj, index) => (
            <TimelineItem key={index} className="timeline-item">
              <TimelineOppositeContent
                sx={{ m: "auto 4" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div className="technologies">
                  <p className="text-orange-600 font-mono text-lg">
                    {proj.projectTechs}
                  </p>
                </div>
                <a
                  href={proj.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="link-project-demo orange"
                >
                  Live Demo
                </a>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot style={{ color: "#ff5722" }} variant="outlined">
                  <GiGearHammer size={30} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  style={{
                    color: "#ff5722",
                    fontWeight: "bolder",
                  }}
                >
                  {proj.projectName}
                </Typography>
                <Typography className="!text-[14px]">
                  {proj.projectDescription}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Form yups={Projects} isIcon="t" />
      )}
    </>
  );
}
