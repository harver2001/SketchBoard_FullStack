import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "./singlePost.css"
import { Context } from '../../context/Context';
export default function SinglePost() {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split('/')[2];
  // console.log(path);
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context);
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [categories,setCategories] = useState("");
  const [updateMode,setUpdateMode] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      // console.log(res.data);
      setPost(res.data);
      // yash.katai_zeher()
      setDesc(res.data.desc);
      setTitle(res.data.title);
      setCategories(res.data.categories);
    }
    getPost();
    // console.log(post);
  },[path])

  const handleDelete = async () => {
    try{
      await axios.delete("/posts/" + path, {data:{username: user.username}});
      window.location.replace("/");
    } catch(err){

    }
  }

  const handleUpdate = async() => {
    try{
      await axios.put("/posts/" + path, {username: user.username , title : title, desc : desc });
      // console.log(window.location);
      // window.location.reload();
      setUpdateMode(false);
    } catch(err) {}
  }

  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            {post.photo && 
              <img src={PF + post.photo} alt="" className='singlePostImg' height="450px" width="550px"/>}
              {updateMode ? <input type='text' className='singlePostTitleInput' value={title} autoFocus onChange={(e) => {setTitle(e.target.value)}}></input> :(<h1 className='singlePostTitle'>
            {title}
            {post.username === user?.username && // if its our post only then we need the delete icon
                <div className='singlePostEdit'>
                  <i class="singlePostIcon fa-solid fa-pen-to-square" onClick={() => {setUpdateMode(true)}}></i>   
                  <i class="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                </div> }
            </h1>)}
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Artist: <Link to={"/?user=" + post.username} className="link"><b>{post.username}</b></Link></span>
                <span className='singlePostDate'>Categories: <Link to={"/?cat=" + post.categories} className="link"><b>{post.categories}</b></Link></span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? <textarea className='singlePostDescInput' value={desc}  onChange={(e) => {setDesc(e.target.value)}}/> : (<p className='singlePostDesc'>
                {desc}
            </p>)}
            {updateMode && <button className='singlePostButton' onClick ={handleUpdate} >Update</button>}
        </div>
    </div>
  )
}
