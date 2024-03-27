
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCojQq9mSDuTGTLHCLkEeVtCDkDOskUgdA",
  authDomain: "my-project-a934c.firebaseapp.com",
  projectId: "my-project-a934c",
  storageBucket: "my-project-a934c.appspot.com",
  messagingSenderId: "356000601948",
  appId: "1:356000601948:web:bca5220c122f6661c0d399",
  measurementId: "G-L8WV65M9TN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);