import React, { useContext, useState } from 'react'
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Setting() {
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [success,setSuccess] = useState(false);

  const { user,dispatch } = useContext(Context);
  const uID = user._id;
  const PF = "http://localhost:5000/images/";
  
  // const handleDelete1 = async () => {
  //   console.log(uID);
  //   try{
  //     await axios.delete("/users/" + uID, {data:{username: user.username}});
  //     window.location.replace("/");
  //   } catch(err){

  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type : "UPDATE_START"});
    const updatedUser = {
        userId:user._id,
        username,email,password

    };
    if(file){
        const data = new FormData(); // here we are making a key value pair object only for when our post will have a image
        const filename = Date.now() + file.name; // Date here we have used so as the there is never 2 files with same name as date is always different
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename; // if we have a photo then we add it to our newPost
        try{
            await axios.post("/upload", data);
        } catch(err){

        } 
    }
    try{
        const res = await axios.put("/users/" + user._id , updatedUser);
        setSuccess(true);
        dispatch({ type : "UPDATE_SUCCESS", payload:res.data });

        // console.log(user._id);
        // window.location.replace("/post/"+res.data._id); 
    } catch(err){
        dispatch({type : "UPDATE_FAILURE"});
    }
}
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'> Update your account</span>
          {/* <span className='settingsDeleteTitle' onClick={handleDelete1}> Delete your account</span> */}
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} />
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} onChange = {(e) => {setFile(e.target.files[0])}} />
          </div>
          <label>Username</label>
          <input className='inp3' type="text" placeholder={user.username} onChange={(e) => {setUsername(e.target.value)}}/>
          <label>Email</label>
          <input className='inp3' type="email" placeholder={user.email} onChange={(e) => {setEmail(e.target.value)}}/>
          <label>Password</label>
          <input className='inp3' type="password" placeholder="*******" onChange={(e) => {setPassword(e.target.value)}}/>
          <button className="settingsSubmit3" type="submit"> Update </button>
          {success && <span style={{ color:"green" , textAlign:"center", marginTop:"20px"}}>Profile has been Updated !</span>}
          {/* alert("Updated Successfully") */}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
