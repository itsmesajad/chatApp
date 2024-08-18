import { useState } from "react";
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext";






const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const {setAuthUser} = useAuthContext()

  const login = async (username, password) => {

    const success = handleInputErrors(username, password)

    if(!success) return

    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // set user in context or local storage
      
      localStorage.setItem('user_info', JSON.stringify(data));
      setAuthUser(data)

      toast.success(`User logged in successfully`)
      
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };
  return {loading, login}
};



function handleInputErrors(username, password){
  if(!username && !password){
    toast.error("Please fill in all required fields")
    return false;
  }
  else if(!username){
    toast.error("Please enter a username")
    return false;
  }
  else if(!password){
    toast.error("Please enter a password")
    return false;
  }

  if(password.length < 6){
    toast.error("Password must be at least 6 characters long")
    return false;
  }
  return true
}



export default useLogin