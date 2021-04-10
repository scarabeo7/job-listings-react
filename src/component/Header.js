import React from 'react'
import close from "./images/icon-remove.svg"

const Header = ({ searchKeywords, deleteKeyword, clearAll }) => {
  return (
    <div>
      <ul>
        {searchKeywords.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteKeyword(item)}>
              <img src={close} alt="" />
            </button>
          </li>
        ))}
        <a href="#" onClick={()=>clearAll()}>Clear</a>
      </ul>
    </div>
  );
};

export default Header
