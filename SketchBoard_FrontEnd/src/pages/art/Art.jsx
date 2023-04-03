import React from 'react'
// import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react';
import ImageGenerator from './ImageGenerator';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const Art = () => {
  const [title, setTitle] = useState("");
  const [flag,setFlag] = useState(false);
  const [imageLink, setImage] = useState("");
  
  // const aiImage = async () => {
  //   const paramaters = {
  //       prompt: title,
  //       n : 2,
  //       size : "1024x1024",
  //     }
  //     const res = await openai.createImage({paramaters});
  //     console.log(res);
  //   }

  const enable = () => {
      setFlag(true);
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Title" className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />  
        <button onClick={enable}> Submit </button>
        {flag && <ImageGenerator text = {title}/>}
      </div>
    </>
  )
}

export default Art


