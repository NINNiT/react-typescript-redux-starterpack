import { Reducer } from "redux"
const initialstate = {}

const demoReducer: Reducer = (previousState = initialstate, action) => {
  switch (action.type) {
    case "demo/success":
      return action.payload
    default:
      return previousState
  }
}

export default demoReducer
