import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <nav className='navbar routes'>
        <h1 className=''>OneNote</h1>
        <ul>
            <li><a style={props.route==='home'?{color:"cyan",textDecoration:"underline",textUnderlineOffset:"12px"}:{}} onClick={()=>{props.setroute('home')}}> Home </a></li>
            <li><a style={props.route==='notes'?{color:"cyan",textDecoration:"underline",textUnderlineOffset:"12px"}:{}} onClick={()=>{props.setroute('notes')}}> Notes </a></li>
            <li><a style={props.route==='about'?{color:"cyan",textDecoration:"underline",textUnderlineOffset:"12px"}:{}} onClick={()=>{props.setroute('about')}}> About us </a></li>
            <li><a style={props.route==='contact'?{color:"cyan",textDecoration:"underline",textUnderlineOffset:"12px"}:{}} onClick={()=>{props.setroute('contact')}}> Contact </a></li>
        </ul>
    </nav>
  )
}
