import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventIcon from '@mui/icons-material/Event';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function LeftSide() {
  return (
    <div className='leftSide-wrapper'>
        <h1 className='header'>
            Menu 
        </h1>
        <ul className='section-list'>
          <li>
            <HomeIcon sx={{ fontSize: 30 }} /> 
            <p className='list-text' >Home</p>
          </li>
          <li>
            <PostAddIcon sx={{ fontSize: 30 }}  /> 
            <p className='list-text'>Posts</p>
          </li>
          <li>
            <MessageIcon sx={{ fontSize: 30 }} />
            <p className='list-text'>Messages</p>
          </li>
          <li>
            <PeopleAltIcon sx={{ fontSize: 30 }} /> 
            <p className='list-text'>Friends</p>
          </li>
          <li>
          <EventIcon sx={{ fontSize: 30 }} /> 
          <p className='list-text'>Events</p>
          </li>
          <li>
            <VideocamIcon sx={{ fontSize: 30 }} />
            <p className='list-text'>Video</p>
          </li>
          <li>
            <PhotoCameraIcon sx={{ fontSize: 30 }} />
            <p className='list-text'>Photos</p>
          </li>
          <li>
            <FilePresentIcon sx={{ fontSize: 30 }} />
            <p className='list-text'>Files</p>
          </li>
          <li>
            <SportsEsportsIcon sx={{ fontSize: 30 }} />
            <p className='list-text'>Games</p>
          </li>
        </ul>
        <div className='line-thru'></div>
        <h2 className='sub-header'>Trending</h2>
        <div className='trend-section'>
          <div className='trend-wrapper'>
            <p className='trend-title'>Reality TV</p>
            <h3 className='trend-header'>Maya</h3>
            <p className='trend-posts'>59.8k Posts</p>
          </div>
          <div className='trend-wrapper'>
            <p className='trend-title'>Politics</p>
            <h3 className='trend-header'>Sturgeon</h3>
            <p className='trend-posts'>5k Posts</p>
          </div>
          <div className='trend-wrapper'>
            <p className='trend-title'>Sports</p>
            <h3 className='trend-header'>Casemiro</h3>
            <p className='trend-posts'>93.1k Posts</p>
          </div>
        </div>
    </div>
  )
}
