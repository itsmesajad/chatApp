import React from "react";
import { IoMdSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div>
      <form className="flex items-center p-4 my-3 relative">
        <input
          type="text"
          className="input placeholder:text-white text-sm text-white w-full rounded-full input-bordered"
          placeholder="type your message"
        />
        <button
          type="button"
          className="btn absolute end-4 btn-circle bg-sky-500 text-xl text-white"
        ><IoMdSend className="mx-auto"/></button>
      </form>
    </div>
  );
};

export default MessageInput;
