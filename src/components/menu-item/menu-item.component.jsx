import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => navigate(`${props.linkUrl}`)}
    >
      <div
        className="back-img"
        style={{
          backgroundImage: `url("${props.imageUrl}")`,
        }}
      ></div>
      <div onClick={() => navigate(`${props.linkUrl}`)} className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
