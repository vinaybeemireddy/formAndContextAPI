import React from 'react'
import { useRef, useState } from 'react';

const UploadImages = () => {
  const [uploadFile, setUploadFile]=useState(null);
  const fileInput= useRef();

  const handleFileUpload=(event)=>{
    const file= event.target.files[0];


    setUploadFile(file);

  }
console.log(uploadFile);
  return (
    <div>

      <input type="file" ref={fileInput} onChange={handleFileUpload}/>

      {uploadFile && (
        <img src={URL.createObjectURL(uploadFile)} alt="uploaded"/>
      )}
      {uploadFile && <p>{uploadFile.name}</p>}
    </div>
  )
}

export default UploadImages


//text===> event.target.value;
//radio---->event.target.value;
//checkbox--->event.target.checked;
//file--->event.target.files