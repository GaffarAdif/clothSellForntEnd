let defultQuantityValue = 1;

const updateQuantity = (state = defultQuantityValue , action )=>{

    switch (action.type) {

        case 'plus':
            if(state < 10){
                return state + 1
            }else{
                return 10
            }
    
        case 'minus':        
         if(state > 1){
            return state - 1
        }
        default:
            return state
    }

}

export default updateQuantity;