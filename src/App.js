import AllJobs from "./component/AllJobs";
import Header from "./component/Header";
import jobData from "./data.json";
import React, { useState } from "react";

function App() {
  const [searchKeywords, setSearchKeywords] = useState([]);
  const addSearchKeywords = (data) => {
    if (!searchKeywords.includes(data)) {
      setSearchKeywords([...searchKeywords, data]);
    }
  };
  const deleteKeyword = (data) => {
    const newKeyword = searchKeywords.filter((word) => word !== data);
    setSearchKeywords(newKeyword);
  };

  const clearAll = () => {
    setSearchKeywords([]);
  };
  return (
    <div>
      <div className="header"></div>
      {searchKeywords.length > 0 && (
        <Header
          searchKeywords={searchKeywords}
          deleteKeyword={deleteKeyword}
          clearAll={clearAll}
        />
      )}
      <AllJobs
        searchKeywords={searchKeywords}
        jobData={jobData}
        addSearchKeywords={addSearchKeywords}
      />
    </div>
  );
}

export default App;
