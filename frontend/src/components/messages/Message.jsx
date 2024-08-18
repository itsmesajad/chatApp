import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../store/useConversation.js';
import { extractTime } from '../../utils/extractTime.js';


const Message = (message) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.message.senderId === authUser._id
  const profilePic = fromMe ?   authUser.profilePic : selectedConversation?.profilePic
  const chatBgClassName = fromMe ? 'bg-sky-500' : 'bg-gray-800'
  const chatPositionClassName = fromMe ? 'chat-end' : 'chat-start'
  const chatTime = extractTime(message.message.createdAt)

  const shakeClass = message.message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatPositionClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={`${shakeClass} chat-bubble chat text-white ${chatBgClassName} pb-2`} >
            {message.message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{chatTime}</div>
    </div>
  )
}

export default Message