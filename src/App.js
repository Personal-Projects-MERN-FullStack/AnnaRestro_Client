import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes"
import AppRoutes from "./Routes";
function App() {
  return (
    
      <Router>
        <AppRoutes/>
      </Router>
    
  );
}

export default App;
