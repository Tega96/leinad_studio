import Header from "./Header"
import Conditional from "./Conditional"

function App() {
    return (
        <div>
            <Header />
            <Conditional isLoggedIn="true" userName="true" />
        </div>
    )
}

export default App;