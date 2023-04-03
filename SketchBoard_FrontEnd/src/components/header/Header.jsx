import React from 'react'
import ImageCarousel from '../carousel/Carousel';
import "./header.css"

export default function 
() {
   
  const images = [
    {linkImg:'carouselImages\wallpaperflare.com_wallpaper.jpg'},
    {linkImg:'carouselImages\wallpaperflare.com_wallpaper.jpg'},
    {linkImg:'carouselImages\wallpaperflare.com_wallpaper.jpg'},
];
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>  Sketch Board </span>
            <span className='headerTitleLg'>Drawings </span>
            {/* <span>Drawings </span> */}
        </div>
        <ImageCarousel/>
        {/* <img className='headerImg'
          src="https://wallpaperaccess.com/full/51363.jpg"
          alt = ""
        /> */}
    </div>
  )
}
