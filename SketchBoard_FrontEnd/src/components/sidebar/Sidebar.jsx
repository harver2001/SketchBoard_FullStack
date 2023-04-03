import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./sidebar.css"

export default function Sidebar() {
  const { user } = useContext(Context);
  const [cats, setCats] = useState([]);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    // console.log(cats);
    getCats();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT USER</span>
        {user && <><img src={PF + user.profilePic} alt="img" width="260px" height="245px" style={{ borderRadius: "50%" }} />
          <p>
            This Account is of <h3>Artist : {user.username}</h3>
            <br />
            Contact {user.username} at <h3>Email : {user.email}</h3>
            {/* Lorem ipsum dolor sit amet, consectetur adip  */}
          </p></>}
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className="sidebarList">
          {cats.slice(0, 20).map((c) => (
            <Link to={`/?cat=${c.name}`} className="link link3">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className="sidebarTitle">Follow Us</span>
        <div className='sidebarSocial'>
          <a href="https://www.facebook.com/login/" className="downLink link3" target="_blank" rel="noopener noreferrer"><i class="sidebarIcon fa-brands fa-facebook"></i></a>
          <a href="https://github.com/harver2001"  className="downLink link3" target="_blank" rel="noopener noreferrer"><i class="sidebarIcon fa-brands fa-github"></i></a>
          <a href="https://in.pinterest.com/login/"  className="downLink link3" target="_blank" rel="noopener noreferrer"><i class="sidebarIcon fa-brands fa-pinterest"></i></a>
          <a href="https://www.instagram.com/harshverma5825/" className="downLink link3" target="_blank" rel="noopener noreferrer"> <i class="sidebarIcon fa-brands fa-square-instagram"></i> </a>
        </div>
      </div>
    </div>
  )
}
