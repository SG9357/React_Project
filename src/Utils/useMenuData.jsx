import { ResMenuLink } from "../Utils/Constants";
import { useEffect,useState } from "react";

const useMenuData=(resid)=>{
    const[menuData,setMenuData]=useState("");
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data= await fetch(ResMenuLink+resid)
        const json=await data.json()
        console.log(json.data)
        setMenuData(json.data)
    }
    return menuData;
}

export default useMenuData;