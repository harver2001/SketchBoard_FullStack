import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import "./topbar.css"
import { Context } from '../../context/Context';

export default function TopBar() {
    // const user = false;
    const {user, dispatch} = useContext( Context );
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({type : "LOGOUT"})
    }

    return (
        <div className="top">
            <div className='topLeft'>
                <a href="https://www.instagram.com/harshverma5825/"  target="_blank" rel="noopener noreferrer"><i class="topIcon fa-brands fa-square-instagram"></i></a>
                <a href="https://github.com/harver2001"  target="_blank" rel="noopener noreferrer"><i class="topIcon fa-brands fa-github"></i></a>
                <a href="https://in.pinterest.com/login/"  target="_blank" rel="noopener noreferrer"><i class="topIcon fa-brands fa-pinterest"></i></a>
                <a href="https://www.facebook.com/login/"  target="_blank" rel="noopener noreferrer"><i class="topIcon fa-brands fa-facebook"></i></a>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'><Link to="/" className='link'>HOME</Link></li>
                    <li className='topListItem'><Link to="/draw" className='link'>GALLERY</Link></li>
                    <li className='topListItem'><Link to="/write" className='link'>POST</Link></li>
                    <li className='topListItem'><Link to="/about" className='link'>ABOUT</Link></li>
                </ul>
            </div>
            <div className='topRight'>
            {
                user ? (<Link to='/settings'><img src = {PF+user.profilePic} alt = " " className="topImg" /></Link>):(
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to="/login">LOGIN</Link></li>
                        <li className='topListItem'><Link className='link' to="/register">REGISTER</Link></li>
                    </ul>
                )
            }
                
                {user && <><div className="topSearchIcon">{user.username}</div>
                <div className='topListItem' onClick={handleLogout}><Link to="/" className='link change'>{user && "LOGOUT"}</Link></div></>
                }
            </div>
        </div>
    )
}
