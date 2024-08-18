import { useEffect } from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../store/useConversation.js';
import { useAuthContext } from '../../context/AuthContext.jsx';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {
    return () => {
      //  cleanup the conversation list (unmount the conversation) 
      setSelectedConversation(null)
    }
  },[setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col '>
        {!selectedConversation ? <NoChatSelected/> : (
          <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className='label-text flex items-center'><img className='ring-2 ring-gray-900 w-10 h-10 rounded-full' src={selectedConversation.profilePic} alt="" /><span className='text-gray-900 font-bold ms-2'>{selectedConversation.fullName}</span></span>
          </div>
          <Messages/>
          <MessageInput/>

      </>
        )}
    </div>
  )
}
export default MessageContainer






const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 🖐 {authUser.fullName.toUpperCase()} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}