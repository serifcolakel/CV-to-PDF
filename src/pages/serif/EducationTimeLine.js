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
import { LangContext } from "./ComponentToPrint";
import EN from "../../en.json";

export default function TimeLine() {
  const lang = React.useContext(LangContext);

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <strong>
            {lang ? "09.2021 - Devam Ediyor" : EN[2].education[0].date}
          </strong>
          <Typography>
            {lang ? "Örgün Öğretim" : EN[2].education[0].educationType}
          </Typography>
          <strong>{lang ? "Türkçe" : EN[2].education[0].language}</strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <MdSchool size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "green", fontWeight: "bolder" }}
          >
            {lang
              ? " Malatya Turgut Özal Üniversitesi"
              : EN[2].education[0].university}
          </Typography>

          <Typography>
            {lang ? "Enformatik Enstitüsü" : EN[2].education[0].enst}
          </Typography>
          <strong>
            {lang
              ? "Elektrik/Elektronik Mühendisliği Tezli Yüksek Lisans"
              : EN[2].education[0].description}
          </strong>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {lang ? " 09.2015 - 06.2020 (mezun)" : EN[2].education[1].date}

          <Typography>
            {lang ? "İkinci Öğretim" : EN[2].education[1].educationType}
          </Typography>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            3.38/4.00
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <MdSchool size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            {lang ? "Fırat Üniversitesi" : EN[2].education[1].university}
          </Typography>
          <Typography>
            {lang ? "Teknoloji Fakültesi" : EN[2].education[1].enst}
          </Typography>
          <strong>
            {lang
              ? "Elektrik/Elektronik Mühendisliği"
              : EN[2].education[1].description}
          </strong>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {lang ? "08.2018 - Devam Ediyor (4.sınıf)" : EN[2].education[2].date}

          <Typography>
            {lang ? "Örgün Öğretim" : EN[2].education[2].educationType}
          </Typography>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#ff5722", fontWeight: "bold" }}
          >
            3.28/4.00
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ color: "#ff5722" }} variant="outlined">
            <MdSchool size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#ff5722", fontWeight: "bold" }}
          >
            {lang ? "Fırat Üniversitesi" : EN[2].education[2].university}
          </Typography>
          <Typography>
            {lang ? "Mühendislik Fakültesi" : EN[2].education[2].enst}
          </Typography>
          <strong>
            {lang
              ? "Bilgisayar Mühendisliği (Ç.A.P)"
              : EN[2].education[2].description}
          </strong>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {lang ? "08.2010 - 06.2014 (mezun)" : EN[2].education[3].date}

          <Typography>
            {lang ? "Örgün Öğretim" : EN[2].education[3].educationType}
          </Typography>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "grey", fontWeight: "bold" }}
          >
            70/100
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ color: "grey" }} variant="outlined">
            <MdSchool size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "grey", fontWeight: "bold" }}
          >
            {lang
              ? "Erol Bilecik Teknik ve Endüstri Meslek Lisesi"
              : EN[2].education[3].university}
          </Typography>

          <Typography>
            {lang
              ? "Elektrik ve Elektronik Teknolojisi"
              : EN[2].education[3].enst}
          </Typography>
          <strong>
            {lang ? "Güvenlik Sistemleri" : EN[2].education[3].description}
          </strong>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
