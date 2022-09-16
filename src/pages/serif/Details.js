import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWindowWidth } from "@react-hook/window-size";
import { LangContext } from "./ComponentToPrint";
import Paper from "@mui/material/Paper";
import TimeLine from "./TimeLine";
import EducationTimeLine from "./EducationTimeLine";
import Skill from "./Skill";
import Projects from "./Projects";
import EN from "../../en.json";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  backgroundColor: "#1b1f30",
  paddingTop: "2rem",
  color: theme.palette.text.secondary,
}));

export default function Details() {
  const sliderWidth = useWindowWidth();
  const lang = useContext(LangContext);

  return (
    <Grid item xs={sliderWidth >= 768 ? 8 : 12}>
      <Item sx={{ backgroundColor: "#fff" }}>
        <Typography
          onClick={() => {
            window.open("https://www.linkedin.com/");
          }}
          sx={{
            textAlign: "left",
            backgroundColor: "#232537",
            padding: "10px 15px",
            fontWeight: "bold",
            color: "#fff",
            fontSize: "0.8rem",
            borderLeft: "15px solid #ff5722",
            fontFamily: "initial",
          }}
        >
          {lang ? "HAKKIMDA" : "ABOUT ME"}
        </Typography>
        {lang ? (
          <p style={{ padding: 20 }}>
            Fırat Üniversitesi Elektrik ve Elektronik Mühendisliği Bölümü
            mezunuyum. Aynı zamanda Bilgisayar Mühendisliğinde Çift Anadal
            öğrencisiyim. 1 yıldır Front-end geliştiriciliği yapıyorum. ReactJS,
            NextJS, HTML, CSS, SASS, Tailwind, Styled Component ve React Native
            ile TypeScript / JavaScript dillerini etkin kullanarak ve gündemi
            takip ederek projeler geliştirmeye çalışıyorum. Ayrıca NodeJS
            (Express / Prisma / MySQL / PostgreSQL) ile backend paradigmalarını
            öğrenmeye çalışıyorum. Ek olarak son iş tecrübem de pm2 / Nginx /
            jenkins gibi teknolojileri kullanarak sunucu üzerindeki build
            işlemlerini otomatikleştirmeye çalıştım. Bu da benim için iyi bir
            deneyim oldu.
          </p>
        ) : (
          <p style={{ padding: 20 }}> {EN[0].summary}</p>
        )}

        <Typography
          sx={{
            textAlign: "left",
            backgroundColor: "#232537",
            padding: "10px 15px",
            fontWeight: "bold",
            color: "#fff",
            fontSize: "0.8rem",
            borderLeft: "15px solid #ff5722",
            marginTop: "2rem",
            fontFamily: "initial",
          }}
        >
          {lang ? "İŞ DENEYİMLERİ" : "WORK EXPERIENCES"}
        </Typography>
        <TimeLine />
        <Typography
          sx={{
            textAlign: "left",
            backgroundColor: "#232537",
            padding: "10px 15px",
            fontWeight: "bold",
            color: "#fff",
            fontSize: "0.8rem",
            borderLeft: "15px solid #ff5722",

            fontFamily: "initial",
          }}
        >
          {lang ? "EĞİTİM BİLGİLERİ" : "EDUCATIONAL INFORMATION"}
        </Typography>
        <EducationTimeLine />
        <Typography
          sx={{
            textAlign: "left",
            backgroundColor: "#232537",
            padding: "10px 15px",
            fontWeight: "bold",
            marginTop: "8rem",
            color: "#fff",
            fontSize: "0.8rem",
            borderLeft: "15px solid #ff5722",

            fontFamily: "initial",
          }}
        >
          {lang ? "PROJELER" : "PROJECTS"}
        </Typography>
        <Projects />
        <Typography
          sx={{
            textAlign: "left",
            backgroundColor: "#232537",
            padding: "10px 15px",
            fontWeight: "bold",
            marginTop: "3rem",
            color: "#fff",
            fontSize: "0.8rem",
            borderLeft: "15px solid #ff5722",
            fontFamily: "initial",
          }}
        >
          {lang
            ? "PROGRAMLAMA DİLLERİ & ARAÇLAR"
            : "PROGRAMMING LANGUAGES & TOOLS"}
        </Typography>
        <Skill />
      </Item>
    </Grid>
  );
}
