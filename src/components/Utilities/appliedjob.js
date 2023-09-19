import { getShoppingCart } from "./Database"

const JobData = async() =>{
    const response = await fetch('job_data.json')
    const job = await response.json()
    
    const getSavedCart = getShoppingCart();
    // console.log(getSavedCart);

    const savedCart = [];
    for(const id in getSavedCart){
        // console.log(id);
        const number = parseInt(id)
        const addedProduct = job.find(pd => pd.id === number)

        savedCart.push(addedProduct)
        
        // if(addedProduct){
        //     const quantity = getSavedCart[id];
        //     addedProduct.quantity = quantity;
        // }
    }

    return savedCart;

}
export {JobData}