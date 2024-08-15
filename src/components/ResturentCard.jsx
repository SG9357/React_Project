import { Src_res_logo } from "../Utils/Constants";

const ResCard=(props)=>{
    const {resobj}=props;
    const {name,cuisines,costForTwo,cloudinaryImageId,avgRating}=resobj.info;
    const{deliveryTime}=resobj.info.sla;
    return(
        <div className="res-card">
            <img className='res-logo' alt='res-logo' src={Src_res_logo+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} min</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
}


export default ResCard;