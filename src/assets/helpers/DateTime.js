
const getCurrTime = ()=>{
    let currTime = new Date()
    let strTime = currTime.toLocaleTimeString('en-IN', {hours:'numeric', minutes:'numeric'}).toUpperCase();
    return strTime;
}

const getCurrDate = ()=>{
    let currTime = new Date()
    let strTime = currTime.toLocaleTimeString('en-IN', {year:'numeric', month:'long', day:'numeric'}).toUpperCase();
    return strTime;
}


export {getCurrDate, getCurrTime};