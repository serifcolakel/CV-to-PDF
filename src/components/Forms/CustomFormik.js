import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import DownloadImage from "./DownloadImage";
export default function CustomFormik({
  initialValues,
  item,
  formSchema,
  name,
}) {
  const [save, setSave] = React.useState(false);
  const [showLocale, setShowLocale] = React.useState(
    localStorage.getItem(name) !== null
  );
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        setSave(true);
        if (localStorage.getItem(name) === null) {
          localStorage.setItem(name, JSON.stringify([values]));
        } else {
          const data = JSON.parse(localStorage.getItem(name));
          if (name === "Profile" || name === "Contact" || name === "AboutMe") {
            alert(`Birden fazla bilgi ${name} sekmesi için giremezsiniz`);
            return;
          }
          localStorage.setItem(name, JSON.stringify([...data, values]));
        }
        resetForm();
      }}
      validationSchema={formSchema}
    >
      {({ values, errors, handleChange, handleSubmit }) => {
        const data = JSON.parse(localStorage.getItem(name));

        return (
          <form
            autoComplete="off"
            className="flex flex-col gap-y-2 justify-center items-center w-[80%] px-4 z-50"
          >
            <p
              className="cursor-pointer py-2 px-4 border-2 rounded-lg font-bold"
              onClick={() => {
                setShowLocale(!showLocale);
              }}
            >
              {showLocale
                ? "Kayıtlı Verilerinizi Kapat"
                : "Kayıtlı Verilerinizi Göster"}
            </p>
            {showLocale && data !== null
              ? data.map((formItem, idx) =>
                  item.map((item, i) => {
                    return (
                      <p key={i}>
                        <span>
                          {item.name}-{name}-{idx}
                        </span>{" "}
                        <strong>: {data[idx][item.name]}</strong>{" "}
                      </p>
                    );
                  })
                )
              : null}
            {data === null && showLocale ? (
              <p className="text-red-600 font-semibold">
                Gösterecek Veri bulamadık
              </p>
            ) : null}
            {data !== null && (
              <p
                className="cursor-pointer py-2 px-4 border-2 rounded-lg font-bold"
                onClick={() => {
                  if (name === "Profile") {
                    localStorage.removeItem("image");
                  }
                  localStorage.removeItem(name);
                  setShowLocale(!showLocale);
                }}
              >
                Verileri Sıfırla
              </p>
            )}
            <p className="text-center">
              {name} formunu doldurup kaydederek, CV'nize ekleyebilirsiniz.
            </p>
            {name === "Profile" && <DownloadImage />}
            {item.map((formItem, idx) => (
              <label
                key={idx}
                htmlFor="phone"
                className="flex relative w-full cursor-pointer h-[70px]"
              >
                <TextField
                  key={idx}
                  name={formItem.name}
                  label={formItem.title}
                  value={values[formItem.name]}
                  fullWidth
                  onChange={handleChange}
                  error={errors[formItem.name] ? true : false}
                  helperText={errors[formItem.name]}
                />
                <p className="absolute right-4 text-2xl top-[14px] font-bold text-[#FEC50B]">
                  *
                </p>
              </label>
            ))}

            <p className="text-center">
              (<span className="text-[#FEC50B] font-bold"> * </span> ) işaretli
              alanları doldurması zorunludur.
            </p>
            <Button
              fullWidth
              variant="contained"
              color="warning"
              style={{ margin: "20px 0" }}
              disabled={!!Object.keys(errors).length}
              onClick={handleSubmit}
            >
              Save {name}
            </Button>
            {save &&
              localStorage.getItem(name) !== null &&
              localStorage.getItem(name) !== "Profile" && (
                <p className="text-green-600">
                  Bilgileriniz kaydedildi.Ekranı kapatabilirsiniz...
                </p>
              )}
          </form>
        );
      }}
    </Formik>
  );
}
