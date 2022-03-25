import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI5-8O0Im3WUL9aEWxQnN-KQhQHILyABg",
  authDomain: "cv2pdf-image-upload.firebaseapp.com",
  projectId: "cv2pdf-image-upload",
  storageBucket: "cv2pdf-image-upload.appspot.com",
  messagingSenderId: "1027454581559",
  appId: "1:1027454581559:web:384a92f1c3c3360d4bf8b2",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
