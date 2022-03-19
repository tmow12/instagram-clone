import React from 'react';
import '../styles/profileIcon.scss';

export default function ProfileIcon({ iconSize, storyBorder, image }) {

    function getRandomProfile(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    let randomProfile = getRandomProfile(1, 70);
    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomProfile}`

  return (
    <div className={storyBorder ? 'storyBorder' : ''}>
        <img className={`profileIcon ${iconSize}`} src={profileImage} alt='profile'></img>
    </div>
  )
}
