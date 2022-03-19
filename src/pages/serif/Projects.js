import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EN from "../../en.json";
import { LangContext } from "./ComponentToPrint";
import { GiGearHammer } from "react-icons/gi";
import { FaReact, FaSass, FaShopify } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiHeroku,
  SiFirebase,
  SiVercel,
  SiMongodb,
} from "react-icons/si";

import Typography from "@mui/material/Typography";

export default function Projects() {
  const lang = React.useContext(LangContext);
  return (
    <Timeline position="alternate">
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <FaReact size={35} color="blue" />
            <SiTailwindcss size={35} color="#38bdf8" />
            <SiHeroku size={35} color="purple" />
          </div>
          <a
            href="https://getir-clone-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-project-demo blue green"
          >
            Live Demo
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <GiGearHammer size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "green", fontWeight: "bolder" }}
          >
            Getir-Clone
          </Typography>
          <Typography>
            {lang
              ? " Bu projemde getir.com'un klonunu ReactJS , TailwinCSS ve Heroku kullanarak geliştirdim."
              : EN[3].projects[0].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <FaReact size={35} color="blue" />
            <SiTailwindcss size={35} color="#38bdf8" />
          </div>
          <a
            href="https://spotify-clone-rosy.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-project-demo blue"
          >
            Live Demo
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <GiGearHammer size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "blue", fontWeight: "bolder" }}
          >
            Spotify-Clone
          </Typography>
          <Typography>
            {lang
              ? "  Bu projemde spotify.com'un klonunu ReactJS ve TailwinCSS kullanarak geliştirdim."
              : EN[3].projects[1].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 4" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <SiNextdotjs size={35} color="black" />
            <SiTailwindcss size={35} color="#38bdf8" />
          </div>
          <a
            href="https://tatilbudur-serifcolakel.vercel.app/"
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
            <GiGearHammer size={40} />
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
            Tatilbudur.com
          </Typography>
          <Typography>
            {lang
              ? "Bu projemde tatilbudur.com tarafından front-end hiring challenge katıldım ve ilk 3'e girdim."
              : EN[3].projects[2].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <FaReact size={35} color="blue" />
            <SiFirebase size={35} color="orange" />
          </div>
          <a
            href="https://messenger-app-serifcolakel.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-project-demo grey"
          >
            Live Demo
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="grey">
            <GiGearHammer size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "grey", fontWeight: "bolder" }}
          >
            Messenger App
          </Typography>
          <Typography>
            {lang
              ? "Bu projemde ise messenger-app'i ReactJS ve Firebase kullanarak geliştirdim."
              : EN[3].projects[3].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <SiNextdotjs size={35} color="black" />
            <SiTailwindcss size={35} color="#38bdf8" />
            <SiVercel size={35} color="black" />
          </div>
          <a
            href="https://dashboard-serifcolakel.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-project-demo blue green"
          >
            Live Demo
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <GiGearHammer size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "green", fontWeight: "bolder" }}
          >
            Dashboard App
          </Typography>
          <Typography>
            {lang
              ? "Bu projede Dashboard tasarımını ChartJS, NextJs ve TailwindCSS kullanarak geliştirdim. serifcolakel@gmail.com ve 1234 ile giriş yapabilirsiniz."
              : EN[3].projects[4].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <SiNextdotjs size={35} color="black" />
            <FaSass size={35} color="purple" />
            <SiMongodb size={35} color="green" />
            <SiVercel size={35} color="black" />
            <SiHeroku size={35} color="purple" />
          </div>
          <a
            href="https://todo-serifcolakel.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link-project-demo blue"
          >
            Live Demo
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <GiGearHammer size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "blue", fontWeight: "bolder" }}
          >
            TODO App
          </Typography>
          <Typography>
            {lang
              ? "Bu projede, NextJS, MongoDB, SASS, Vercel ve Heroku kullanarak başlangıç aşamasında full stack geliştiricileri tarafından tercih edilen Todo App'i geliştirdim."
              : EN[3].projects[5].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeline-item">
        <TimelineOppositeContent
          sx={{ m: "auto 4" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="technologies">
            <SiNextdotjs size={35} color="black" />
            <SiTailwindcss size={35} color="#38bdf8" />
            <FaShopify size={35} color="green" />
          </div>
          <a
            href="https://serif-shopify.vercel.app/"
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
            <GiGearHammer size={40} />
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
            Shopify App
          </Typography>
          <Typography>
            {lang
              ? "Shopify App'i NextJS, TailwindCSS, Shopify API kullanarak geliştirdim."
              : EN[3].projects[6].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
