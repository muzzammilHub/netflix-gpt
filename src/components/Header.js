import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, LOGO} from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {

  const user = useSelector((store)=> store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user;
  
        dispatch(addUser({
           uid:uid, 
           email:email, 
           displayName: displayName, 
           photoURL: photoURL 
          }));

          navigate("/browse");
      } else {
        
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
  },[]);

  const handleClick = ()=>{

      signOut(auth)
        .then(() => {
        }).catch((error) => {
        });
  }

  const handleGptSearchClick = ()=>{
     dispatch(toggleGptSearch());
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-40 w-screen flex  justify-between items-center pl-2">
        <img 
          className=" w-24 md:w-44"
          src={LOGO_URL}
          alt="logo"></img>
        {user && (<div className=" flex">
          <button 
            onClick={handleGptSearchClick}
            className=" bg-purple-800 text-white rounded-md md:px-4 font-bold hover:bg-opacity-50 mr-4 text-sm md:text-lg md:p-0 pl-2 pr-2">
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
           <img className=" h-10 rounded-md" 
                 src={LOGO}>
            </img>
            <button onClick={handleClick} className=" text-red-700 font-bold">Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header