import * as Yup from "yup";
export const Profile = {
  name: "Profile",
  formSchema: Yup.object().shape({
    imageUrl: Yup.string()
      .url("Please enter a valid URL")
      .min(3, "Must be between 3 and 75 characters")
      .max(75, "Must be between 3 and 75 characters")
      .required("Image Url is required"),
    fullName: Yup.string()
      .min(3, "Must be between 3 and 75 characters")
      .max(75, "Must be between 3 and 75 characters")
      .required("Full Name is required"),

    job: Yup.string()
      .min(3, "Must be between 3 and 75 characters")
      .max(75, "Must be between 3 and 75 characters")
      .required("Job is required"),
  }),
  item: [
    {
      title: "Profil Fotoğrafınız (URL)",
      name: "imageUrl",
    },
    {
      title: "İsim Soyisim",
      name: "fullName",
    },
    {
      title: "Mesleğiniz",
      name: "job",
    },
  ],
  initialValues: {
    imageUrl: "",
    fullName: "",
    job: "",
  },
};
export const Contact = {
  name: "Contact",
  formSchema: Yup.object().shape({
    emailContact: Yup.string().email().required("Email is required"),
    phoneContact: Yup.string()
      .min(3, "Must be between 3 and 75 characters")
      .max(75, "Must be between 3 and 75 characters")
      .required("Phone is required"),
    github: Yup.string(),
    linkedin: Yup.string(),
    konum: Yup.string(),
    webSiteContact: Yup.string().url().nullable(),
  }),
  item: [
    {
      title: "Email adresiniz",
      name: "emailContact",
    },
    {
      title: "Telefon (XXX) XXX XX XX",
      name: "phoneContact",
    },
    {
      title: "Github adresinizi giriniz (username)",
      name: "github",
    },
    {
      title: "Linkedin adresinizi giriniz (username)",
      name: "linkedin",
    },
    {
      title: "Konumunuzu giriniz (Ülke / Şehir)",
      name: "konum",
    },
    {
      title: "Web sitenizi giriniz",
      name: "webSite",
    },
  ],
  initialValues: {
    emailContact: "",
    phoneContact: "",
    github: "",
    linkedin: "",
    konum: "",
    webSite: "",
  },
};
export const References = {
  name: "References",
  formSchema: Yup.object().shape({
    nameReferences: Yup.string().required("Name is required"),
    phoneReferences: Yup.string().required("Phone is required"),
    emailReferences: Yup.string().required("Email is required"),
  }),
  item: [
    {
      title: "Referans Adınız Soyadınız",
      name: "nameReferences",
    },
    {
      title: "Referans Telefon Numaranız",
      name: "phoneReferences",
    },
    {
      title: "Referans Email Adresiniz",
      name: "emailReferences",
    },
  ],
  initialValues: {
    nameReferences: "",
    phoneReferences: "",
    emailReferences: "",
  },
};
export const Language = {
  name: "Language",
  formSchema: Yup.object().shape({
    language: Yup.string().required("Language is required"),
    levelLanguage: Yup.number()
      .min(1, "Must be between 1 and 5")
      .max(5, "Must be between 1 and 5")
      .required("Level is required"),
  }),
  item: [
    {
      title: "Dil",
      name: "language",
    },
    {
      title: "Dil Seviyesi (1-5 arasında)",
      name: "levelLanguage",
    },
  ],
  initialValues: {
    language: "",
    levelLanguage: 0,
  },
};
export const AboutMe = {
  name: "AboutMe",
  formSchema: Yup.object().shape({
    aboutMe: Yup.string()
      .min(3, "Must be between 3 and 1000 characters")
      .max(1000, "Must be between 3 and 1000 characters")
      .required("About Me is required"),
  }),
  item: [
    {
      title: "Hakkımda için yazı giriniz...",
      name: "aboutMe",
    },
  ],
  initialValues: {
    aboutMe: "",
  },
};
export const Experience = {
  name: "Experience",
  formSchema: Yup.object().shape({
    companyName: Yup.string().required("Company is required"),
    jobTitle: Yup.string().required("Job Title is required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
    jobDescription: Yup.string().required("Job Description is required"),
    locationExperience: Yup.string().required("Location is required"),
  }),
  item: [
    {
      title: "Şirket Adı",
      name: "companyName",
    },
    {
      title: "İş Ünvanı",
      name: "jobTitle",
    },
    {
      title: "Başlangıç Tarihi (GG-AA-YYYY)",
      name: "startDate",
    },
    {
      title: "Bitiş Tarihi (GG-AA-YYYY)",
      name: "endDate",
    },
    {
      title: "İş Tanımı",
      name: "jobDescription",
    },
    {
      title: "İş Yeri",
      name: "locationExperience",
    },
  ],
  initialValues: {
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
    locationExperience: "",
  },
};
export const Education = {
  name: "Education",
  formSchema: Yup.object().shape({
    school: Yup.string().required("School is required"),
    degree: Yup.string().required("Degree is required"),
    fieldOfStudy: Yup.string().required("Field Of Study is required"),
    from: Yup.string().required("From is required"),
    to: Yup.string().required("To is required"),
    type: Yup.string().required("Type is required"),
    descriptionEducation: Yup.string().required("Description is required"),
  }),

  item: [
    {
      title: "Okul Adı",
      name: "school",
    },
    {
      title: "Fakülte",
      name: "degree",
    },
    {
      title: "Bölümünüz",
      name: "fieldOfStudy",
    },
    {
      title: "Başlangıç Tarihi (GG-AA-YYYY)",
      name: "from",
    },
    {
      title: "Bitiş Tarihi (GG-AA-YYYY)",
      name: "to",
    },
    {
      title: "Eğitim Türü (Örgün / İkinci Öğretim)",
      name: "type",
    },
    {
      title: "Dil",
      name: "descriptionEducation",
    },
  ],
  initialValues: {
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: "",
    type: "",
    descriptionEducation: "",
  },
};
export const Projects = {
  name: "Projects",
  formSchema: Yup.object().shape({
    projectName: Yup.string().required("Project Name is required"),
    projectDescription: Yup.string().required(
      "Project Description is required"
    ),
    projectLink: Yup.string().required("Project Link is required"),
    projectTechs: Yup.string().required("Project Github is required"),
    projectColor: Yup.string().required("Project Color is required"),
  }),
  item: [
    {
      title: "Proje Adı",
      name: "projectName",
    },
    {
      title: "Proje Açıklaması",
      name: "projectDescription",
    },
    {
      title: "Proje Linki",
      name: "projectLink",
    },
    {
      title: "Proje Teknolojileri",
      name: "projectTechs",
    },
    {
      title: "Proje Rengi",
      name: "projectColor",
    },
  ],
  initialValues: {
    projectName: "",
    projectDescription: "",

    projectLink: "",
    projectTechs: "",
    projectColor: "",
  },
};
export const Skills = {
  name: "Skills",
  formSchema: Yup.object().shape({
    skillName: Yup.string().required("Skill Name is required"),
    skillLevel: Yup.number()
      .min(1, "Must be between 1 and 5")
      .max(5, "Must be between 1 and 5")
      .required("Skill Level is required"),
  }),
  item: [
    {
      title: "Yetenek Adı",
      name: "skillName",
    },
    {
      title: "Yetenek Seviyesi",
      name: "skillLevel",
    },
  ],
  initialValues: {
    skillName: "",
    skillLevel: 0,
  },
};
