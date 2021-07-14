import { ActionCreator, Dispatch } from "redux"

const demoActionCreator: ActionCreator<void> = () => (dispatch: Dispatch) => {
  dispatch({ type: "demo/initiated", payload: {} })
  try {
    dispatch({
      type: "demo/success",
      payload: { demo: true }
    })
  } catch (error) {
    dispatch({
      type: "demo/error",
      payload: error
    })
  }
}

export default demoActionCreator
