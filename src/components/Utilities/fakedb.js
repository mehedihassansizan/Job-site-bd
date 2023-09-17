// use local storage to manage cart data
const addToDb = id => {
    localStorage.setItem('jobId', JSON.stringify(id));
}



export {
    addToDb,
    
    
}
