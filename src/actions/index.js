
// //action ---> action is a plain object that contains a type property
export const increment = () => {
  return {
    type: 'INCREMENT',
    payload: 'Hello'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
    payload: 'Hello'
  }
}