import * as actionTypes from "./actionTypes"

const initialState = {
   loading:false,
    styles:[],
    error:""
}

console.log("styles>>>>",initialState.styles)
export const reducer = (state = initialState,action) => {

    console.log("i am action",action)
    switch(action.type){
      case "LOADING":
          return {
              ...state,
              loading:true
          }
      case actionTypes.ADDSTYLES:
            return {
                ...state,
                loading:false,
                styles:[...state.styles,action.payload]
            }
      case actionTypes.REMOVESTYLES:
            return {
                ...state,
                loading:false,
                styles:state.styles.filter(item => {
                   return item.unique_id!== action.payload
                })
            }

      case actionTypes.UPDATESTYLES: {
            
              console.log("in updated Reducer")
            
            const id = action.payload.unique_id

            const stateIndex =state.styles.findIndex((item) => {
             return item.unique_id === id
             });
              
              console.log("stateIndex>>",stateIndex)

              const newState =[...state.styles]

              console.log("i am new state>>>",newState)

              if(newState[stateIndex] !== undefined){
                     newState[stateIndex] = action.payload
              }

              console.log("new state of index>>>",newState[stateIndex])

              return {
                  ...state,
                  loading:false,
                  styles:newState
                }
             
            }    
      default:
          return state

    }
}

// state.styles.map((item) => (
//     item.uniqueid===action.payload.uniqueid ? {...item, styles:action.payload}: item
// ))