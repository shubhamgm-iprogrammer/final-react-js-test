import * as actionTypes from "./actionTypes"

export const addStyle = (item) => {
    return {
        type:actionTypes.ADDSTYLES,
        payload:item.data.payload
    }
}

export const loadingItem = () => {
    return {
        type:actionTypes.LOADING,
    }
}
export const removeStyle = (id) => {
    return {
        type:actionTypes.REMOVESTYLES,
        payload:id
    }
}


export const updateStyle = (values) => {

    console.log("in updateStyle action>>>",values)
    return {
        type:actionTypes.UPDATESTYLES,
        payload:values
    }
}

