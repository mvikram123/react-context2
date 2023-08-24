import React ,{useContext} from "react";
import CricketerContext from "../context/CricketerContext";



const Player=()=>{
    // let value=useContext(CricketerContext);
    // console.log(value);

        let{cricketer,setCricketer}=useContext(CricketerContext)


    return(

        <div>
            <h1>Player</h1>
            <h1>{cricketer.name}</h1>
            <h1> he is now {cricketer.age}</h1>
            <h1>He has taken {cricketer.wicket}</h1>
            <h1>{cricketer.retire?"retired":"Not retired"}</h1>
            <button onClick={()=>setCricketer({...cricketer,age:42})}>update age</button>
            {/* <p>Let's Welcome {value}</p> */}
       
        </div>
    )
}
export default Player;



{/* <CricketerContext.Consumer>
{
(info)=>(
    <h1>Let's Welcome {info}</h1>
)
}
</CricketerContext.Consumer> */}