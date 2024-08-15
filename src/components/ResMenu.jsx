import Shimmer from "./ShimmerUi";
import { ResMenuLink } from "../Utils/Constants";
import { useParams } from "react-router-dom";
import useMenuData from "../Utils/useMenuData";


const Menu=()=>{

    const {resid}=useParams()
    const menuData=useMenuData(resid)
    console.log(menuData)

    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu=async()=>{
    //     const data= await fetch(ResMenuLink+resid)
    //     const json=await data.json()
    //     console.log(json.data)
    //     setMenuData(json.data)
    // }

    if (menuData.length==0) { return <Shimmer/>}

    const {name,costForTwoMessage,cuisines}=menuData?.cards[2]?.card?.card?.info
    console.log(name)
    const {itemCards}=(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    console.log('kkkkkk'+itemCards)

    return(
        <div className="MenuItems">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            {itemCards.map(item=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name+"- ₹"+(item?.card?.info.defaultPrice/100 ||item?.card?.info?.finalPrice/100 ||item?.card?.info?.price/100) }</li>))}
        </div>
    )
}


export default Menu;