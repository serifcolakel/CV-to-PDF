import React, { useEffect, useRef } from "react";
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
import DetailsMember from "./DetailsMember";
import Form from "../Form";
import { Profile, Contact, References, Language, Skills } from "../Yups";
import Skill from "./Skills";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  backgroundColor: "#1b1f30",
  paddingTop: "2rem",
  color: theme.palette.text.secondary,
}));

export const Print = React.forwardRef((props, ref) => {
  useEffect(() => {
    // setTitle
    document.title = "Your Resume";
  }, []);
  const componentRef = useRef();
  const sliderWidth = useWindowWidth();
  const [profile] = React.useState(JSON.parse(localStorage.getItem("Profile")));
  const [contact] = React.useState(JSON.parse(localStorage.getItem("Contact")));
  const [references] = React.useState(
    JSON.parse(localStorage.getItem("References"))
  );
  const [languages] = React.useState(
    JSON.parse(localStorage.getItem("Language"))
  );
  console.log(profile);
  return (
    <div className="App" ref={componentRef}>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={sliderWidth >= 768 ? 4 : 12}>
            <Item>
              <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
                <span className="text-sm text-white uppercase font-bold">
                  Profİl
                </span>
                <Form yups={Profile} />
              </div>
              {profile !== null ? (
                <>
                  <img
                    src={profile[0]?.imageUrl}
                    alt="serif-foto"
                    className="w-[180px] border-[5px] border-[#ff5722] rounded-full object-cover mx-auto"
                  />
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
                    {profile[0]?.fullName}
                    <Typography
                      color="textPrimary"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "1rem",
                      }}
                    >
                      {profile[0]?.job}
                    </Typography>
                  </Typography>
                </>
              ) : (
                <Form yups={Profile} isIcon="1" />
              )}
              <ReactToPrint
                trigger={() => (
                  <button className="btn btn-primary">DOWNLOAD RESUME</button>
                )}
                content={() => componentRef.current}
              />
              <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 mt-4 border-l-4 border-[#ff5722] ">
                <span className="text-sm text-white uppercase font-bold">
                  İletİşİm bİlgİlerİ
                </span>
                <Form yups={Contact} />
              </div>
              {contact !== null ? (
                <>
                  <a href="/" rel="noopener">
                    <MdLocationPin size={18} color="#fff" />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: ".75rem",
                      }}
                    >
                      {contact[0]?.konum}
                    </Typography>
                  </a>
                  <a href={`mailto:${contact[0]?.emailContact}`}>
                    <MdMail size={18} color="#fff" />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: ".75rem",
                      }}
                    >
                      {contact[0]?.emailContact}
                    </Typography>
                  </a>
                  <a href={`tel:+90${contact[0]?.phoneContact}`}>
                    <BsFillTelephoneFill size={18} color="#fff" />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: ".75rem",
                      }}
                    >
                      {contact[0]?.phoneContact}
                    </Typography>
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/${contact[0]?.linkedin}/`}
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
                      {contact[0]?.linkedin}
                    </Typography>
                  </a>
                  <a
                    href={contact[0]?.webSite}
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
                      {contact[0]?.webSite}
                    </Typography>
                  </a>
                  <a
                    href={`https://www.github.com/${contact[0]?.github}/`}
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
                      {contact[0]?.github}
                    </Typography>
                  </a>
                </>
              ) : (
                <Form yups={Contact} isIcon="t" />
              )}
              )
              <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
                <span className="text-sm text-white uppercase font-bold">
                  REFERANSLAR
                </span>
                <Form yups={References} />
              </div>
              {references !== null ? (
                references?.map((item, idx) => (
                  <div className="py-2" key={idx}>
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
                      {item.nameReferences}
                    </Typography>
                    <a href={`mailto:${item.emailReferences}`}>
                      <MdMail size={18} color="#fff" />
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#fff",
                          fontSize: ".75rem",
                        }}
                      >
                        {item.emailReferences}
                      </Typography>
                    </a>
                    <a href={`tel:${item.phoneReferences}`}>
                      <BsFillTelephoneFill size={18} color="#fff" />
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#fff",
                          fontSize: ".75rem",
                        }}
                      >
                        {item.phoneReferences}
                      </Typography>
                    </a>
                  </div>
                ))
              ) : (
                <Form yups={References} isIcon="t" />
              )}
              <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
                <span className="text-sm text-white uppercase font-bold">
                  Yabancı DİL
                </span>
                <Form yups={Language} />
              </div>
              {languages !== null ? (
                <div className="flex flex-col gap-y-4 py-4">
                  {languages?.map((item, idx) => (
                    <div
                      className="flex flex-row text-white px-4 gap-x-4 items-center w-full"
                      key={idx}
                    >
                      <span className="pr-10 w-[30%]">{item.language}</span>
                      <Rating value={Number(item.levelLanguage)} readOnly />
                    </div>
                  ))}
                </div>
              ) : (
                <Form yups={Language} isIcon="t" />
              )}
              <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
                <span className="text-sm text-white uppercase font-bold">
                  PROGRAMLAMA DİLLERİ ve ARAÇLAR
                </span>
                <Form yups={Skills} />
              </div>
              <Skill />
            </Item>
          </Grid>
          <DetailsMember />
        </Grid>
      </Box>
    </div>
  );
});
