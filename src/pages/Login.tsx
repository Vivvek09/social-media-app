import {auth, provider} from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export const Login=()=>{

    const navigate=useNavigate();
    const signInWGoogle =async()=>{
        const result =await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/home');
    }
    return (
        <div><h1>Sign In with Google to Continue</h1>
        <button onClick={signInWGoogle}>Sign In With Google</button></div>
    )
}

