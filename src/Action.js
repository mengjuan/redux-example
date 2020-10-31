export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";
export const RESET="RESET";

export function increment(){
    return {type: INCREMENT};
}

/* ()=>() will return the result automate*/
export const decrement = ()=>({type: DECREMENT})

export const resetCounter =()=>{
    return {type: RESET}
}
