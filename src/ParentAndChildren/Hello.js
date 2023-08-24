import React from "react";




import React from "react";
// // import Hello from "./Hello";


// const App=()=>{


// return(

//   <div>

//     <Hello name="John"/>
//     <Hello name="Jaccky">
//       <p>I am Jaccky the actor</p>
//     </Hello>
//     <Hello name="Ibrahim"/>
//     <Hello name="Shan">

//       <p>I am Shan the Singer</p>
//       <p>I am Shan the great</p>
      
//     </Hello>
//     <Hello name="Khan"/>
//     <Hello name="Munna Bhai"/>
//   </div>
// )
// }

// export default App;



const Hello=(props)=>{



    return(

        <div style={{background:"wheat"}}>

            <h2> This is hello</h2>
            <p>My name is {props.name}</p>
            {/* here props.children is used to render all children of Hello component in App.js file */}
            {props.children}
        </div>
    )
}

export default Hello;