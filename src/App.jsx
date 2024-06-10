
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./routes/HomeScreen";
import Products from "./routes/Products";
import GlobalProvider from "./context/GlobalProvider";

function App() {
  return (
    <div>      
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<Products/>} />        
        </Routes>      
      </GlobalProvider>    
    </div>
  );
}

export default App;
