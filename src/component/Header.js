import React from "react";
import close from "./images/icon-remove.svg";

const Header = ({ searchKeywords, deleteKeyword, clearAll }) => {
  return (
    <div className="header">
      <ul>
        {searchKeywords.map((item, index) => (
          <li key={index}>
            {item}
            <button className="button" onClick={() => deleteKeyword(item)}>
              <img src={close} alt="" />
            </button>
          </li>
        ))}
        {/* eslint-disable-next-line */}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;
