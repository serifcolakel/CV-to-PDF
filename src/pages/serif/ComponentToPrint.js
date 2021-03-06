import React, { useRef } from "react";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { MdLocationPin, MdMail } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { Rating, Typography } from "@mui/material";
import { useWindowWidth } from "@react-hook/window-size";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ReactToPrint from "react-to-print";
import Details from "./Details";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  backgroundColor: "#1b1f30",
  paddingTop: "2rem",
  color: theme.palette.text.secondary,
}));
export const LangContext = React.createContext();

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const sliderWidth = useWindowWidth();
  const [language, setLanguage] = React.useState(true);
  return (
    <LangContext.Provider value={language}>
      <div className="App" ref={componentRef}>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={sliderWidth >= 768 ? 4 : 12}>
              <Item>
                <img
                  src="https://i.hizliresim.com/5h20dz6.jpg"
                  alt="serif-foto"
                  className="w-[180px] border-[5px] border-[#ff5722] rounded-full object-cover mx-auto"
                />
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn-primary">DOWNLOAD RESUME</button>
                  )}
                  content={() => componentRef.current}
                />

                <button
                  className="btn btn-secondary"
                  onClick={() => setLanguage(!language)}
                >
                  Language : {language ? "TÜRKÇE" : "ENGLISH"}
                </button>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",

                    marginTop: "1rem",
                    fontFamily: "initial",
                  }}
                >
                  {!language ? "SERIF COLAKEL" : "ŞERİF ÇOLAKEL"}

                  <Typography
                    color="textPrimary"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: "1rem",
                    }}
                  >
                    {!language
                      ? "Electric and Electronic Engineer - Front-End Developer"
                      : "Elektrik ve Elektronik Mühendisi - Ön Uç Geliştirici"}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    backgroundColor: "#232537",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "0.8rem",
                    borderLeft: "5px solid #ff5722",
                    marginTop: "1rem",
                    fontFamily: "initial",
                    textTransform: "uppercase",
                  }}
                >
                  {!language ? "contact Information" : "İletİşİm bİlgİlerİ"}
                </Typography>
                <a href="/" rel="noopener">
                  <MdLocationPin size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    Antakya / Hatay
                  </Typography>
                </a>
                <a href="mailto:serifcolakel0@gmail.com">
                  <MdMail size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    serifcolakel0@gmail.com
                  </Typography>
                </a>
                <a href="tel:+905398568303">
                  <BsFillTelephoneFill size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    +90 539 856 83 03
                  </Typography>
                </a>
                <a
                  href="https://www.linkedin.com/in/serifcolakel/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLinkedin size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    /serifcolakel
                  </Typography>
                </a>
                <a
                  href="https://serifcolakel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGlobal size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".55rem",
                    }}
                  >
                    https://serifcolakel.vercel.app/
                  </Typography>
                </a>
                <a
                  href="https://github.com/serifcolakel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    /serifcolakel
                  </Typography>
                </a>
                <Typography
                  sx={{
                    textAlign: "left",
                    backgroundColor: "#232537",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "0.8rem",
                    borderLeft: "5px solid #ff5722",
                    marginTop: "1rem",
                    fontFamily: "initial",
                  }}
                >
                  {!language ? "REFERENCES" : "REFERANSLAR"}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: ".75rem",
                    padding: "15px 3px 5px 3px",
                    borderBottom: "1px solid #ff5722",
                    width: "100%",
                  }}
                >
                  {language
                    ? "Prof. Dr. Abdulkadir ŞENGÜR"
                    : "Prof. Dr. Abdulkadir SENGUR"}
                </Typography>
                <a href="mailto:ksengur@firat.edu.tr">
                  <MdMail size={18} color="#fff" />

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    ksengur@firat.edu.tr
                  </Typography>
                </a>
                <a href="tel:04242374343">
                  <BsFillTelephoneFill size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    +90 0424 237 43 43
                  </Typography>
                </a>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: ".75rem",
                    marginTop: "8px",
                    padding: "5px 3px 5px 3px",
                    borderBottom: "1px solid #ff5722",
                    borderTop: "1px solid #ff5722",
                    width: "100%",
                  }}
                >
                  {!language
                    ? "Prof. Dr. Huseyin Altun"
                    : "Prof. Dr. Hüseyin Altun"}
                </Typography>
                <a href="mailto:haltun@firat.edu.tr">
                  <MdMail size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    haltun@firat.edu.tr
                  </Typography>
                </a>
                <a href="tel:04242374343">
                  <BsFillTelephoneFill size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    +90 0424 237 43 37
                  </Typography>
                </a>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: ".75rem",
                    padding: "5px 3px 5px 3px",
                    marginTop: "8px",
                    borderTop: "1px solid #ff5722",
                    borderBottom: "1px solid #ff5722",
                    width: "100%",
                  }}
                >
                  {!language
                    ? "Prof. Dr. Prof.Dr. Melih Cevdet İnce"
                    : "Prof. Dr. Prof.Dr. Melih Cevdet Ince"}
                </Typography>
                <a href="mailto:mcince@gmail.com">
                  <MdMail size={18} color="#fff" />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: ".75rem",
                    }}
                  >
                    mcince@gmail.com
                  </Typography>
                </a>
                <Typography
                  sx={{
                    textAlign: "left",
                    backgroundColor: "#232537",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "0.8rem",
                    borderLeft: "5px solid #ff5722",
                    marginTop: "1rem",
                    fontFamily: "initial",
                  }}
                >
                  {language ? "YABANCI DİL" : "LANGUAGE"}
                </Typography>
                <div className="language">
                  <span>{language ? "İngilizce" : "English"}</span>
                  <Rating value={3} readOnly />
                </div>
              </Item>
            </Grid>
            <Details />
          </Grid>
        </Box>
      </div>
    </LangContext.Provider>
  );
});
