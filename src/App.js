import React,{useEffect} from 'react'
import Login from './components/Login'
import Spotify from "./components/Spotify";
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import axios from 'axios';


export default function App() {
  
  const [{ token }, dispatch] = useStateProvider();
  //console.log(token);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      
      dispatch({ type: reducerCases.SET_TOKEN, token});
    }
    localStorage.setItem('myToken', token);
    document.title = "Spotify";
  }, [token,dispatch]);
  return <div>{token ? <Spotify/> : <Login />}</div>;
  
}
  