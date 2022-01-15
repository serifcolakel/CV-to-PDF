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

export default function TimeLine() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          02.2020 - 04.2020
          <Typography>Gebze / Kocaeli</Typography>
          <strong>Stajyer Mühendis</strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <MdEngineering size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "green", fontWeight: "bolder" }}
          >
            Antsis Elektronik
          </Typography>

          <Typography>
            Gömülü Sistemler ve Anten sistemleri üzerine gerçekleştirilen
            projeleri tasarlanması ve gerçekleştirilmesi.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          06.2019 - 08.2019
          <Typography>İskenderun / Hatay</Typography>
          <strong>Stajyer Mühendis</strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <MdEngineering size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "blue", fontWeight: "bolder" }}
          >
            İSDEMİR
          </Typography>
          <Typography>
            Sıcak Haddehane de Elektrik & Otomasyon Bakım biriminde arızaların
            ve sistem stabilizasyonun gerçekleştirilmesi , Sıcak haddehane
            process'in incelenmesi ve iyileştirmelerin yapılması
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          06.2014 - 12.2014
          <Typography>Antakya / Hatay</Typography>
          <strong>Elektrik Kalfası</strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <MdEngineering size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontWeight: "bolder" }}
          >
            Yalçın Elektrik
          </Typography>
          <Typography>
            Ev ve inşaat elektriği bakımı onarımı , malzeme satışı , elektrikli
            ev aletleri bakım ve onarımı
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          06.2013 - 09.2013
          <Typography>Antakya / Hatay</Typography>
          <strong>Stajyer Öğrenci</strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot style={{ color: "#ff5722" }} variant="outlined">
            <MdEngineering size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "#ff5722", fontWeight: "bolder" }}
          >
            Akın Bilişim
          </Typography>
          <Typography>Bilişim ve Ses Sistemleri Bakım onarımı</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          06.2012 - 08.2012
          <Typography>Antakya / Hatay</Typography>
          <strong>Stajyer Öğrenci</strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot>
            <MdEngineering size={40} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "", fontWeight: "bolder" }}
          >
            M & B Bilişim
          </Typography>
          <Typography>
            Güvenlik Sistemleri Bakım Onarım ve Montajının gerçekleştirilmesi
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
