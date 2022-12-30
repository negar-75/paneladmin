import React from "react";

const useDidMountEffect = (func, deps) => {  //to prevent first render useEffect 
    
    const didMount = React.useRef(false);

    React.useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, [deps]);
}


export default useDidMountEffect