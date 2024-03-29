import * as React from "react";
import { LangContext } from "./ComponentToPrint";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { MdEngineering } from "react-icons/md";
import Typography from "@mui/material/Typography";
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
        >
          {lang ? "01.03.2022 - 08.07.2022" : EN[1].experience[6].date}
          <Typography
            style={{
              color: "blue",
            }}
          >
            {lang ? "Ankara (Remote)" : EN[1].experience[6].location}
          </Typography>
          <strong>
            {lang ? "React & React Native Developer (Frontend Developer)" : EN[1].experience[6].role}
          </strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="inherit">
            <MdEngineering
              size={40}
              style={{
                color: "blue",
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "blue", fontWeight: "bolder" }}
          >
            {lang
              ? "IDVLABS YAZILIM VE DANIŞMANLIK HİZMETLERİ A.Ş."
              : EN[1].experience[6].company}
          </Typography>

          <Typography>
            {lang
              ? "Türkiye menşeli bir bankanın mobil uygulamasında Bireysel Emeklilik Sisteminin tasarım ve kod standartlarına uygun olarak proje teslimi gerçekleştirildi. Bu Proje de Git ile ilgili önemli bilgilere (cherry-pick vb.) konuları deneyimlemenin yanı sıra React-Native ile oluşturulmuş web ve mobil tabanlı projede tasarımlar ile servisler arasındaki etkileşimler işleyişe uygun olarak tamamlandı. Güncel olarak ise banka içerisinde Kredi Kartı dönüşümleri tarafında geliştirmelere destek vermekteyim."
              : EN[1].experience[6].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
        >
          {lang ? "01.03.2022 - 08.07.2022" : EN[1].experience[5].date}
          <Typography
            style={{
              color: "violet",
            }}
          >
            {lang ? "İstanbul (Remote)" : EN[1].experience[5].location}
          </Typography>
          <strong>
            {lang ? "Front-end Developer" : EN[1].experience[5].role}
          </strong>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="inherit">
            <MdEngineering
              size={40}
              style={{
                color: "violet",
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ color: "violet", fontWeight: "bolder" }}
          >
            {lang
              ? "KG Bilgi İşlem Teknoloji A.Ş."
              : EN[1].experience[5].company}
          </Typography>

          <Typography>
            {lang
              ? "React ve NextJs ile geliştirilen frontend projeleri xd adobe tasarımlarına göre ve tasklara göre geliştirildi. Ayrıca şirket tarafından verilen sunucu üzerine Nginx, pm2(process manager), jenkins(commit ile tetiklenerek tekrardan build için) ile script yazılarak build işlemleri gerçekleştirildi. Benim için iyi bir deneyim oldu."
              : EN[1].experience[5].description}
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
          {lang ? "02.2020 - 04.2020" : EN[1].experience[0].date}
          <Typography>
            {lang ? "Gebze / Kocaeli" : EN[1].experience[0].location}
          </Typography>
          <strong>
            {lang ? "Stajyer Mühendis" : EN[1].experience[0].role}
          </strong>
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
            {lang ? " Antsis Elektronik" : EN[1].experience[0].company}
          </Typography>

          <Typography>
            {lang
              ? "Gömülü Sistemler ve Anten sistemleri üzerine gerçekleştirilen projeleri tasarlanması ve gerçekleştirilmesi."
              : EN[1].experience[0].description}
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
          <Typography>Iskenderun / Hatay</Typography>
          <strong>
            {" "}
            {lang ? "Stajyer Mühendis" : EN[1].experience[1].role}
          </strong>
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
            {lang ? " İSDEMİR" : EN[1].experience[1].company}
          </Typography>
          <Typography>
            {lang
              ? " Sıcak Haddehane de Elektrik & Otomasyon Bakım biriminde arızaların ve sistem stabilizasyonun gerçekleştirilmesi , Sıcak haddehane process'in incelenmesi ve iyileştirmelerin yapılması"
              : EN[1].experience[1].description}
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
          <strong>
            {lang ? " Elektrik Kalfası" : EN[1].experience[2].role}
          </strong>
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
            {lang ? "Yalçın Elektrik" : EN[1].experience[2].company}
          </Typography>
          <Typography>
            {lang
              ? "Ev ve inşaat elektriği bakımı onarımı , malzeme satışı , elektrikli ev aletleri bakım ve onarımı"
              : EN[1].experience[2].description}
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
          <strong>{lang ? "Stajyer Öğrenci" : EN[1].experience[3].role}</strong>
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
            {lang ? "Akın Bilişim" : EN[1].experience[3].company}
          </Typography>
          <Typography>
            {lang
              ? "Bilişim ve Ses Sistemleri Bakım onarımı"
              : EN[1].experience[3].description}
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
          06.2012 - 08.2012
          <Typography>Antakya / Hatay</Typography>
          <strong>{lang ? "Stajyer Öğrenci" : EN[1].experience[4].role}</strong>
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
            style={{ color: "grey", fontWeight: "bolder" }}
          >
            {lang ? "M & B Bilişim" : EN[1].experience[4].company}
          </Typography>
          <Typography>
            {lang
              ? "Güvenlik Sistemleri Bakım Onarım ve Montajının gerçekleştirilmesi"
              : EN[1].experience[4].description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
