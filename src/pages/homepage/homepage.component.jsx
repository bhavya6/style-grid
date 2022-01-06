import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

//functional component since we dont need to store state and need any lifecycle methods at this point
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory></Directory>
    </div>
  );
};

export default HomePage;
