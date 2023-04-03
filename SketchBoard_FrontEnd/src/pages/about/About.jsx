import React from 'react'
import "./about.css"

export const About = () => {
  return (
    <div class="bod">
    <section>
            <div class = "image1">
               <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" />
            </div>

            <div class = "content1">
                <br />
                <h2>About Me</h2>
                <span></span>
                <h1 className='harsh'>Harsh Verma</h1>
                <br />
                <p>A MERN Stack Developer, a DSA Problem Solver, a Competetive Programmer...</p>
                <p>In Short, BTech. UnderGrad from IIIT BBSR...</p>
                <ul class = "links1">
                    <li><a href = "https://github.com/harver2001"  target="_blank" rel="noopener noreferrer">Development</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "https://leetcode.com/piro_coder13/"  target="_blank" rel="noopener noreferrer">DS ALgorithm</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "https://www.codechef.com/users/piro_coder13"  target="_blank" rel="noopener noreferrer">Competetive Programming</a></li>
                </ul>
                <ul class = "icons1">
                    <li>
                    <a href="https://in.pinterest.com/login/" style={{color:"inherit",margin:"2px"}} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-pinterest"></i></a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/login/" style={{color:"inherit",margin:"2px"}} target="_blank" rel="noopener noreferrer"><i class = "fa fa-facebook"></i></a>
                    </li>
                    <li>
                    <a href="https://github.com/harver2001" style={{color:"inherit",margin:"2px"}} target="_blank" rel="noopener noreferrer"><i class = "fa fa-github"></i></a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/harshverma5825/" style={{color:"inherit",margin:"2px"}} target="_blank" rel="noopener noreferrer"><i class = "fa fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}
