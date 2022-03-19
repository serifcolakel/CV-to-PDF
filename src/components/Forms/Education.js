import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { MdSchool } from "react-icons/md";
import Typography from "@mui/material/Typography";
import Form from "../Form";
import { Education } from "../Yups";
export default function Educations() {
  const [education] = React.useState(
    JSON.parse(localStorage.getItem("Education"))
  );
  return (
    <>
      {education !== null ? (
        <Timeline position="alternate">
          {education.map((edu, idx) => (
            <TimelineItem key={idx}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <strong>
                  {edu.from} - {edu.to}
                </strong>
                <Typography>{edu.type}</Typography>
                <strong>{edu.descriptionEducation}</strong>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                  <MdSchool size={30} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  style={{ color: "green", fontWeight: "bolder" }}
                >
                  {edu.school}
                </Typography>

                <Typography> {edu.degree}</Typography>
                <strong>{edu.fieldOfStudy}</strong>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Form yups={Education} isIcon="t" />
      )}
    </>
  );
}
