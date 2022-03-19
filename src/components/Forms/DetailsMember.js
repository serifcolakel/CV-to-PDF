import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWindowWidth } from "@react-hook/window-size";
import Paper from "@mui/material/Paper";
import Project from "./Project";
import { AboutMe, Experience, Education, Projects } from "../Yups";
import Form from "../Form";
import Experiences from "./Experience";
import Educations from "./Education";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  backgroundColor: "#1b1f30",
  paddingTop: "2rem",
  color: theme.palette.text.secondary,
}));

export default function DetailsMember() {
  const sliderWidth = useWindowWidth();
  const [aboutMe] = React.useState(JSON.parse(localStorage.getItem("AboutMe")));
  return (
    <Grid item xs={sliderWidth >= 768 ? 8 : 12}>
      <Item sx={{ backgroundColor: "#fff" }}>
        <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
          <span className="text-sm text-white uppercase font-bold">
            HAKKIMDA
          </span>
          <Form yups={AboutMe} />
        </div>
        {aboutMe !== null ? (
          <p style={{ padding: 20 }}>{aboutMe[0]?.aboutMe}</p>
        ) : (
          <Form yups={AboutMe} isIcon="t" />
        )}
        <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
          <span className="text-sm text-white uppercase font-bold">
            İŞ DENEYİMLERİ
          </span>
          <Form yups={Experience} />
        </div>
        <Experiences />
        <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
          <span className="text-sm text-white uppercase font-bold">
            EĞİTİM BİLGİLERİ
          </span>
          <Form yups={Education} />
        </div>
        <Educations />
        <div className="flex flex-row justify-between items-center bg-[#232537] px-4 py-2 border-l-4 border-[#ff5722] ">
          <span className="text-sm text-white uppercase font-bold">
            PROJELER
          </span>
          <Form yups={Projects} />
        </div>
        <Project />{" "}
      </Item>
    </Grid>
  );
}
