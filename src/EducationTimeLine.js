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

export default function TimeLine() {
  return (
    <Timeline position="alternate" sx={{ marginBottom: "6rem" }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <strong>09.2021 - Devam Ediyor</strong>
          <Typography>Örgün Öğretim</Typography>
          <strong>Türkçe</strong>
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
            Malatya Turgut Özal Üniversitesi
          </Typography>

          <Typography>Enformatik Enstitüsü</Typography>
          <strong>Elektrik/Elektronik Mühendisliği Tezli Yüksek Lisans</strong>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          09.2015 - 06.2020 (mezun)
          <Typography>İkinci Öğretim</Typography>
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
            Fırat Üniversitesi
          </Typography>
          <Typography>Teknoloji Fakültesi</Typography>
          <strong>Elektrik/Elektronik Mühendisliği</strong>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          08.2018 - Devam Ediyor (4.sınıf)
          <Typography>Örgün Öğretim</Typography>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#ff5722", fontWeight: "bold" }}
          >
            3.28/4.00 (Ç.A.P)
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
            Fırat Üniversitesi
          </Typography>
          <Typography>Mühendislik Fakültesi</Typography>
          <strong>Bilgisayar Mühendisliği</strong>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          08.2010 - 06.2014 (mezun)
          <Typography>Örgün Öğretim</Typography>
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
            Erol Bilecik Teknik ve Endüstri Meslek Lisesi
          </Typography>

          <Typography>Elektrik ve Elektronik Teknolojisi</Typography>
          <strong>Güvenlik Sistemleri</strong>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
