export const initialState = {
    basket: [],
    user: null,
};
{/* Price calculation */}
export const getBasketTotle = (basket) =>
basket?.reduce((amount, item) => item.price +amount,0)


function reducer(state, action) {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'ADD TO BASKET':
            //Logic to adding to basket
            return { 
                ...state,
                basket: [...state.basket, action.item],
             };
            
        case 'REMOVE_FROM_BASKET':
            //Logic to romove from basket

            // we clone the basket
            let newBasket = [...state.basket];

            // we check to see if product exists,
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exist in basket, remove it ....
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    "cant remove product"
                );
            }
            return { ...state, basket: newBasket };
            
            
        default:
            return state;
    }
}

export default reducer;