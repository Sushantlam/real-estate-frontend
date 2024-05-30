import React from 'react'
import './Profile.scss'
import List from '../../Component/List/List'
import Footer from '../../Component/Footer/Footer'
import Chat from '../../Component/Chat/Chat'


const Profile = () => {
  return (
    <>
     <div style={{height: '100%'}}>
    <div className='profileSlide'>
        <div className='userSide'>
            <div className="userInfo">
                <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
                </div>

                <div className='info'>
                    <span>
                        Avatar :  <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
       
                    </span>
                    <span> Username: <b>Sushant Lama</b> </span>
                    <span> email: <b>sushantlama732@gmail.com</b> </span>
                    <span> Number: <b>9813481120</b> </span>

                </div>

                <div className="title">
                <h1>Mylist</h1>
                <button>Add New Post</button>
                </div>
                <List/>
                <div className="title">
                <h1>Saved Post</h1>
                <button>My Saved</button>
                </div>
                <List/>
              
            </div>

        </div>

        <div className='chatSide'>
            <div className="wrapper"><Chat/></div>

        </div>

    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Profile