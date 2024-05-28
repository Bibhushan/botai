
function getCurrTime(){
    let currTime = new Date()
    let strTime = currTime.toLocaleTimeString('en-IN', {hours:'numeric', minutes:'numeric'}).toUpperCase();
    console.log('time', strTime);
    return strTime;
}

function getCurrDate(){
    let currTime = new Date()
    let strDate = currTime.toLocaleTimeString('en-IN', {year:'numeric', month:'long', day:'numeric'}).toUpperCase();
    return strDate;
}


export {getCurrDate, getCurrTime};