// use local storage to manage cart data
const addToLocalStorage = id => {
    localStorage.setItem('jobId', JSON.stringify(id));
}

export {
    addToLocalStorage,
}
