import React, { useState } from "react";
import CricketerContext from "./CricketerContext";


const CricketerProvider=(props)=>{
    let[cricketer,setCricketer]=useState({
        name:"mahendra Singh Dhoni",
        age:40,
        retire:false,
        wicket:1
    })




    return(

        <div>

            <CricketerContext.Provider value={
                {
                    cricketer:cricketer,
                    setCricketer:setCricketer
                }
            }>
                {props.children}

            </CricketerContext.Provider>
        </div>
    )
}

export default CricketerProvider;