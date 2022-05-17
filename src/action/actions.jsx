export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const uppercase = () => {
    return{
        type: "UPPER"
    }
}

export const lowercase = () => {
    return{
        type: "LOWER"
    }
}