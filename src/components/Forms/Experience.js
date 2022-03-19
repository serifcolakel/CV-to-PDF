import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { MdEngineering } from "react-icons/md";
import Typography from "@mui/material/Typography";
import { Experience } from "../Yups";
import Form from "../Form";
export default function Experiences() {
  const [experience] = React.useState(
    JSON.parse(localStorage.getItem("Experience"))
  );
  return (
    <>
      {experience !== null ? (
        <Timeline position="alternate">
          {experience.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {exp.startDate} - {exp.endDate}
                <Typography>{exp.locationExperience}</Typography>
                <strong>{exp.jobTitle}</strong>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <MdEngineering size={30} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  style={{ color: "blue", fontWeight: "bolder" }}
                >
                  {exp.companyName}
                </Typography>
                <Typography>{exp.jobDescription}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Form yups={Experience} isIcon="1" />
      )}
    </>
  );
}
