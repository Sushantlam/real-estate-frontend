import React from 'react'
import './Chat.scss'
import ChatMessage from '../ChatMessage/ChatMessage'

const Chat = () => {
  return (
    <div className=' chatBox'>
        <div className='mesages'>
            <h1>Messages</h1>
            <div className='message'>

            

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sushant Lama</span>
        <p>Lorem ipsum dolor sit amet consectetur...</p>

        </div>
        <div className='message'>

            

<img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
<span>Sushant Lama</span>
<p>Lorem ipsum dolor sit amet consectetur...</p>

</div>
<div className='message'>

            

<img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
<span>Sushant Lama</span>
<p>Lorem ipsum dolor sit amet consectetur...</p>

</div>
<div className='message'>

            

<img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
<span>Sushant Lama</span>
<p>Lorem ipsum dolor sit amet consectetur...</p>

</div>
        <div className='message'>

            

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sushant Lama</span>
        <p>Lorem ipsum dolor sit amet consectetur...</p>

        </div>
        <div className='message'>

            

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sushant Lama</span>
        <p>Lorem ipsum dolor sit amet consectetur...</p>

        </div>
        <div className='message'>

            

        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Sushant Lama</span>
        <p>Lorem ipsum dolor sit amet consectetur...</p>

        </div>
        </div>
        <div className="chats">
            <ChatMessage/>

        </div>
    </div>
  )
}

export default Chat