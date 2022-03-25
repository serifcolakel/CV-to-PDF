import React from "react";
import { storage } from "../../firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { Input, Stack } from "@mui/material";

export default function DownloadImage() {
  const [progress, setProgress] = React.useState(0);
  const [image] = React.useState(
    localStorage.getItem("image")
      ? JSON.stringify(localStorage.getItem("image"))
      : null
  );
  function uploadFiles(files) {
    if (!files) return;
    const storageRef = ref(storage, `/files/${files.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          localStorage.setItem("image", url);
        });
      }
    );
  }
  return (
    <>
      {image === null && (
        <Stack direction="column" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              onChange={(e) => uploadFiles(e.target.files[0])}
              id="contained-button-file"
              type="file"
            />
          </label>
          <progress value={progress} max="100" />
        </Stack>
      )}
    </>
  );
}
