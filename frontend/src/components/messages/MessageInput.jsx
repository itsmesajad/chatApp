import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage.js"

const MessageInput = () => {
  const [messageText, setMessageText] = useState('')
  const { sendMessage, loading } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!messageText) return

    await sendMessage(messageText)
    setMessageText('')
    // console.log(messageText);
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center p-4 my-3 relative">
        <input
          type="text"
          className="input placeholder:text-white text-sm text-white w-full rounded-full input-bordered"
          placeholder="type your message"
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
        />
        <button
          type="submit"
          className="btn input absolute end-4 btn-circle bg-transparent border-none outline-none focus:outline-none hover:bg-transparent  text-xl text-white"
        >{loading ? <span className="loading loading-spinner"></span> : <IoMdSend className="mx-auto"/>}</button>
      </form>
    </div>
  );
};

export default MessageInput;
