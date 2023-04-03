import React, { useContext, useState } from 'react'
import "./write.css"
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user} = useContext(Context);
    const [categories,setCategories] = useState("")
    // const [categ,setCateg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await await setCategory(categ.split(','));
        // console.log(categories);
        const newPost = await {
            username:user.username,
            title,
            desc,
            categories,
        };
        // console.log(newPost);
        if(file){
            const data = new FormData(); // here we are making a key value pair object only for when our post will have a image
            const filename = Date.now() + file.name; // Date here we have used so as the there is never 2 files with same name as date is always different
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename; // if we have a photo then we add it to our newPost
            try{
                await axios.post("/upload", data);
            } catch(err){

            } 
        }
        try{
            const res = await axios.post("/posts",newPost);
            await axios.post("/categories", {name : categories});
            window.location.replace("/post/"+res.data._id); 
        } catch(err){

        }
    }
  return (
    <div className='write'>
    {file &&  (
        
        <img className = "writeImg" src={URL.createObjectURL(file)} /*here we are making a url for our file object so that we can use it to see the image*/  />
    )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup'>
                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e => setFile(e.target.files[0])} />
                <input type="text" placeholder="Title" className='writeInput1' autoFocus={true} onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="Category" className='writeInput1' autoFocus={true} onChange={e => setCategories(e.target.value)} />
            </div>
            <div className='writeFormGroup1'>
                <textarea placeholder='Explain your Art' type='text' className='writeInput1 writeText3' onChange={e => setDesc(e.target.value)} ></textarea>
            </div>
            <button className='writeSubmit3 submitBox' type="submit"> Publish </button>
        </form>
    </div>
  )
}
