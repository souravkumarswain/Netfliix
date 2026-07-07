import { Provider } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import userStore from "./utils/userStore"

function App() {
  return (
    <Provider store={userStore}>
     <Body/>
    </Provider>
  )
}

export default App
