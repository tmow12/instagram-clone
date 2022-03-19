import React from 'react'
import '../styles/menu.scss'
import {ReactComponent as Home} from '../images/home.svg'
import {ReactComponent as ActivityFeed} from '../images/activityFeed.svg'
import {ReactComponent as FindPeople} from '../images/findPeople.svg'
import {ReactComponent as Messenger} from '../images/messenger.svg'
import {ReactComponent as NewPost} from '../images/newPost.svg'
import ProfileIcon from './ProfileIcon'
import self from '../images/self.jpeg'

export default function Menu() {
  return (
    <div className='menu'>
        <Home className='icon'/>
        <Messenger className='icon'/>
        <NewPost className='icon'/>
        <FindPeople className='icon'/>
        <ActivityFeed className='icon'/>
        <ProfileIcon iconSize='small' image={self} storyBorder={true}/>
    </div>
  )
}
