import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>oops! Error</h1>
            <h1>Error is  {err.status}:{err.statusText}</h1>
        </div>
    )
}

export default Error;