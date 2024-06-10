export default (state, action) => {  
 
  switch (action.type) {

    case "CREATE_CART": 
      return {
        ...state,
        actualcart: {
          id: self.crypto.randomUUID(),
          products: [],
          status_buy: false
        }

      }

    case "ADD_PRODUCT":

      return {
        ...state,
        actualcart: {
          ...state?.actualcart,
          products: [
            ...state?.actualcart?.products,
            action.payload,
          ],        
        }  
      }

    default:
      state;
  }
};
