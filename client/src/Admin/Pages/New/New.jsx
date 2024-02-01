import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './New.scss'
import { useState } from 'react';

const New = ({inputs,title}) => {
  const [file,setFile]=useState('');
  return (
    <div className='new'>
      <SideBar />
      <div className="newContainer">
        <NavBar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={
                file
                ?URL.createObjectURL(file)
                :"https://cdn2.vectorstock.com/i/1000x1000/70/01/no-image-symbol-missing-available-icon-gallery-vector-42607001.jpg"
              } 
              alt="avatar" 
            />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
                <label htmlFor='file'>
                  Image:<DriveFolderUploadIcon className='icon' />
                  </label>
                <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])}  style={{display:"none"}} />
              </div>
              {inputs.map((input)=>(

              
              <div className="formInput" key={input.id}>
                <label >{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
             ))}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
