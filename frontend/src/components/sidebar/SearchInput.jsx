import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../store/useConversation.js';
import useGetConversations from '../../hooks/useGetConversations.js';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setsearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    if(search.length < 3){
      return toast.error("Search must be at least 3 characters")
    }
    // console.log(search);
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(!conversation){
      toast.error("No such user found")
    }
    setSelectedConversation(conversation)
    setsearch("")
    

  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input value={search} onChange={(e)=> setsearch(e.target.value)} type="text" placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch className='w-4 h-4 outline-none'/></button>
    </form>
  )
}

export default SearchInput