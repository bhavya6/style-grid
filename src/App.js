import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

const HatsPage = () => <div>HATSS</div>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/hats" element={<HatsPage></HatsPage>}></Route>
          <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
          <Route
            path="/signin"
            element={<SignInAndSignUpPage></SignInAndSignUpPage>}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
