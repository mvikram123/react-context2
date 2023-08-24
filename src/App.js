import React from "react";
import Player from "./Components/Player";

import CricketerProvider from "./context/CricketerProvider";



const App=()=>{




    return(


        <div>
              <h1>App</h1>
            
          {/* <CricketerProvider> */}
          <Player />
          {/* </CricketerProvider> */}
        </div>
    )
}

export default App;