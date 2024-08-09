import User from "../models/user.model.js";
import bcrypt  from "bcryptjs";
import generateTokenandCookie from "../utils/generateToken.js";



// signup function
export const signUpController = async (req, res, next) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error: 'Passwords do not match'});
        }


        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: 'Username already exists'});
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic: gender === 'male'? boyProfilePic : girlProfilePic
        })

        if(newUser){
            // Generate JWT token
            generateTokenandCookie(newUser._id, res)
            
            await newUser.save();
            res.status(200).json(`User created successfully`)
        }
        else{
            res.status(400).json({error: 'Invalid user data'})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error : `Internal Server Error`})
    } 
}





// login function
export const loginController = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: 'Invalid credentials'})
        }

        generateTokenandCookie(user._id, res)
        res.status(200).json(`User logged in successfully`)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error : `Internal Server Error`})
        
    }
}



export const logoutController = (req, res) => {
    try {
        res.cookie("access_token", "", {maxAge : 0})
        res.status(200).json({message : "User logged out successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error : `Internal Server Error`})
    }
}