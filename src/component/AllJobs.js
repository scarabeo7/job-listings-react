import React, { useState, useEffect } from "react";
import SingleJob from "./SingleJob";

const AllJobs = ({ jobData, addSearchKeywords, searchKeywords }) => {
  const [filteredData, setFilteredData] = useState([]);
  const modifiedData = () => {
    if (searchKeywords.length > 0) {
      const newData = filteredData.filter((item) => {
        return searchKeywords.every((key) => {
          return (
            item.role === key ||
            item.level === key ||
            item.languages.includes(key) ||
            item.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(jobData);
    }
  };

  useEffect(() => {
    modifiedData();
    // eslint-disable-next-line
  }, [searchKeywords]);
  return (
    <div className="allJobs">
      {filteredData.map((job, index) => (
        <SingleJob
          job={job}
          key={index}
          addSearchKeywords={addSearchKeywords}
        />
      ))}
    </div>
  );
};

export default AllJobs;
