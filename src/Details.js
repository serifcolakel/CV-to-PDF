import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TimeLine from "./TimeLine";
import EducationTimeLine from "./EducationTimeLine";
import Skill from "./Skill";
import { useWindowWidth } from "@react-hook/window-size";
import Projects from "./Projects";
import EN from "./en.json";
import { LangContext } from "./ComponentToPrint";

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
            Bitirme projesi olarak İsdemir bünyesindeki stajim sırasında
            inceleme fırsatı bulduğum Parstech adlı firmaya ait çelik üretiminde
            kalite kontrol ve çeliğin kimliğinin belirli şartlara göre
            oluşturulup üzerinde üretim sırasında meydana gelen üretim
            hatalarından dolayı oluşan bozunmaların görüntü işleme yöntemi
            kullanılarak saptanması ve belirlenen kimliğine üzerine kaydedilmesi
            müşteri isteklerine göre değerlendirilir hale getilmesini konu alan
            projeyi Sayın Prof.Dr.Abdulkadir Şengür danışmanlığında
            gerçekleştirdik.Ayrıca kendimi hala bu konularda
            geliştirmekteyim.Yazılıma olan ilgimi farklı alanda geliştirmek için
            yaklaşık 6 aydır front-end alanında kendimi geliştirmekte ve
            projeler üretmekteyim.Projelerin detayları için github sayfamdan
            erişebilirsiniz."
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
            marginTop: "2rem",
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
