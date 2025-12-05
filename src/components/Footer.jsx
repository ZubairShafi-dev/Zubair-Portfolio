import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
console.log(currentYear);

  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <div className='footer'>
        Made by Zubair Shafi <span style={styleSymbol}>©</span> {currentYear}
    </div>
  )
}
