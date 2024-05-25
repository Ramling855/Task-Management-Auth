// components/Auth.js
import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";


const Auth = ({ setUser }) => {
  const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        setUser(result.user);
        
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
        console.log(error)
    }
  
      
  };

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <button style={{backgroundColor:"#664032",color:"white"}} className="googleButton" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Auth;
