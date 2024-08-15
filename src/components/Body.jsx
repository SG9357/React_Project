import { useEffect, useState } from "react";
import apiData from "../Utils/ResturentData";
import ResCard from "./ResturentCard";
import Shimmer from "./ShimmerUi";
import { Link } from "react-router-dom";
import UseStatus from "../Utils/useStatus";


const Body=()=>{
    // const [filteredData,setApiData]=useState([]);

    // useEffect(()=>{fetchData()},[]);

    // const fetchData=async ()=>{
    //     const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     jsonData=await response.json();
    //     setApiData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    const [filteredData,setApiData]=useState(apiData);
    const [serachText,setSearchText]=useState("");

    const onlineStatus=UseStatus()
    if(onlineStatus==false){
        return(<h1>Oops, Youre offline!!</h1>)
    }

    return filteredData.length===0 ? (<Shimmer/>):
     (
        <div className="body">
            <div className="filter_res">
                <input className="serach"  onChange={(e)=>{
                    setSearchText(e.target.value)
                }}></input>
                <button className="serach-btn" onClick={()=>{
                    const searchList=apiData.filter((val)=>
                        val.info.name.toLowerCase().includes(serachText.toLowerCase())
                    )
                    console.log(searchList)
                    setApiData(searchList);
                }}>Search</button>
                <button className="filter-btn" onClick={
                    ()=>{
                    setApiData(filteredData.filter(data=>data.info.avgRating>4.4));
                    }
                }>Filter Top Rated Resturents</button>
            </div>
            <div className="res-container">
                {
                    filteredData.map(resturent=><Link to={"/resturant/"+resturent.info.id} style={{ textDecoration: 'none' }}><ResCard key={resturent.info.id} resobj={resturent}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body;