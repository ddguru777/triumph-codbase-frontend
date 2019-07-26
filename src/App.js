import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Provider } from "react-redux"

// Redux
import { store, history } from "./services/redux/store"

// Components
import PublicRoute from "./routes"

function App() {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <PublicRoute history={history} />
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
