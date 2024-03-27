import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from './firebase/firebaseConfig'

export default function App() {
  const [image, setImage] = useState('');
  const storage = getStorage(app);
  const storageRef = ref(storage, `images/.${image.name}`);
  let file = null; // Define a variable to hold the selected file

  const handleUploadImage = () => {
    if (file) {
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle errors
          console.error('Error uploading file:', error);
        },
        () => {
          // Upload completed successfully, get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );
    } else {
      console.log('No file selected.');
    }
  };

  const handleChangeImage = (e) => {
    // Update the file variable when the user selects a file
    console.log('Selected file:', e.target.files[0]);
    file = e.target.files[0]; // Assign the selected file to the file variable
  };

  return (
    <div>
      App

      <input onChange={handleChangeImage} type="file" />

      <button onClick={handleUploadImage}>click</button>
    </div>
  );
}
