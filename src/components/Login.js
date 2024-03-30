import Header from "./Header"
import { useState, useRef} from "react"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if(message) return;

    // Task:- sign In and sign Up the user
    if(!isSignInForm){
        // sign Up logic
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value,
                photoURL: "url"
              }).then(() => {
                const { uid, email, displayName, photoURL} = auth.currentUser;

                dispatch(addUser({
                    uid:uid, 
                    email:email, 
                    displayName: displayName, 
                    photoURL: photoURL 
                    }));

              }).catch((error) => {
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            
        });
    }else{
        // sign In logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {

                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    }

  const toggleForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className=" absolute">
            <img className=" h-screen object-cover w-screen"
             src={BG_IMG_URL}
             alt="bgImage"></img>
        </div>
        <form onSubmit={(e)=> e.preventDefault()}  className=" w-10/12 md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 overflow-hidden">
            <p 
                className=" font-semibold text-white text-3xl">
                    {isSignInForm? "Sign In" : "Sign Up"}
            </p>
            {!isSignInForm &&
                (<input 
                    ref={name}
                    className=" w-full p-3 outline-none bg-[#3A3433] rounded-md mt-8 text-slate-400" 
                    type="text" 
                    placeholder="name" 
                    required>
                </input>)
            }
            <input 
                ref={email}
                className=" w-full p-3 outline-none bg-[#3A3433] rounded-md mt-6 text-slate-400" 
                type="email" 
                placeholder="Email" 
                required>
            </input>
            <input 
                ref={password}
                className=" w-full p-3 outline-none bg-[#3A3433] rounded-md mt-4 mb-8 text-slate-400" 
                type="password" 
                placeholder="Password" 
                required>
            </input>
            <p className=" text-base text-red-600 font-semibold">{errorMessage}</p>
            <button 
                onClick={handleButtonClick}
                className=" w-full p-3 outline-none bg-red-600 rounded-md mt-8 mb-8 font-bold text-white" 
                >{isSignInForm? "Sign In": "Sign Up"}
            </button>
            <p 
                className=" md:text-lg text-[#766d6c] ">
                        {isSignInForm? "New to netflix?": "Already registered?"} 
                <a onClick={toggleForm} className=" text-white" href="#">
                        {isSignInForm? "Sign up now.": "Sign in now"}
                </a>
            </p>
            <p 
                className=" md:text-lg text-[#c0bbba] ">
                    Testing email and password:
            </p>
            <div className="flex justify-between">
            <p 
                className=" md:text-lg text-[#c0bbba] ">
                    mhussain@gmail.com
            </p>
            <p 
                className=" md:text-lg text-[#c0bbba] ">
                    Pqrst@12
            </p>
            </div>
        </form>
    </div>
  )
}

export default Login