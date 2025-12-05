import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon2.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Zubair Shafi</div>
              <div className="staticTitle">
            Mobile App
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="/resume.pdf" download='./resume.pdf'>Download Resume</a>

            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="boy-with-laptop" />
        </div>
    </div>
  )
}
