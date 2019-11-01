import {useState} from "react"


export const Toggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue);
  
    const toggleHandler = () => {
      setState(!state);
    };
    return [state, toggleHandler];
  };
  