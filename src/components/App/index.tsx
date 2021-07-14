import React, { FunctionComponent } from "react"
import { Provider } from "react-redux"
import styles from "./App.module.scss"
import store from "../../redux/store"

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <span>Hey there!</span>
      </div>
    </Provider>
  )
}

export default App
