import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = (props) => {
  console.log(props);
  return (
  <div>
    <h1>Hats page Buddy</h1>
  </div>
  )
  };

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/hats" element={<HatsPage></HatsPage>}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
