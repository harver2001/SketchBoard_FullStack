import React, { useState } from 'react'
import axios from 'axios'
import "./gallery.css"
// import videoBg from '../assets/Pexels Videos 2169880.mp4';
const Gallery = () => {
  const [photo, setPhoto] = useState("");
  const clientID = process.env.REACT_APP_API_CLIENT_ID;
  const [imageData, setImageData] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }
  const handleSubmit = async (event) => {
    // console.log(photo);
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + " drawing&client_id=" + clientID;
    await axios.get(url)
      .then((response) => setImageData(response.data.results));
    console.log(imageData)
    // console.log(imageData[0].urls.full);
    // setFlag(true);
    // console.log(flag);
  }
  const listingComponents = imageData.map((listing) => (

    <div className='container'>
      {/* <h2>{listing.description}</h2> */}
      <div className='box'>
        <img src={listing.urls.small} />
        <a href={listing.urls.small} download={listing.alt_description}>Download</a>
        <div class="download android">
          <i class="fa fa fa-android fa-3x"></i>
          <span class="df">Download </span>
        </div>
        {/* <h2>{listing.alt_description}</h2> */}
      </div>
    </div>
  ))
  return (
    // <div className='mainContainer'>
    // <div className='overlay1'>
    //   <video src={videoBg} autoPlay muted loop />
    <div className='Gallery content'>


      <h1 class='arun'>  Explore some Art....</h1>

      <input type="text" placeholder="Title" className='writeInput' autoFocus={true} onChange={handleChange} />
      <button className='writeSubmit2' onClick={handleSubmit} type="submit"> Search </button>

      <div className='container'>
        {imageData.map((listing) => (
          <div className='box'>
            <img src={listing.urls.small} />
            <div class="download android">
            <a href={listing.urls.full} className="downLink" target="_blank" rel="noopener noreferrer"><i class="logo fa-solid fa-download"></i></a>
              <span class="df"><a href={listing.urls.full} className="downLink" target="_blank" rel="noopener noreferrer"> Download </a></span>
            </div>
          </div>
        ))}
      </div>

      {/* {setFlag(false)} */}
    </div>
    // </div>
    // </div>
  )
}

export default Gallery