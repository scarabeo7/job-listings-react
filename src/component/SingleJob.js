import React, { useState, useEffect } from "react";

const SingleJob = (props) => {
  const {
    company,
    contract,
    featured,
    // id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.job;

  const otherDetails = [role, level, ...languages, ...tools];

  // use hook to import each job's logo
  const [icon, setIcon] = useState("");
  const svgImport = () => {
    /*const svgLogo =*/ import(`${logo}`).then((data) => {
      setIcon(data.default);
    });
  };

  useEffect(() => {
    svgImport();
  }/*, [logo]*/);
  return (
    <div className="singleJob" key={props.index}>
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="section-1">
        <div className="company">
          <div className="company-name">{company}</div>
          {props.job.new && <span className="new">new!</span>}
          {featured && <span className="feature">featured!</span>}
        </div>
        <div className="position">{position}</div>
        <div className="job-details">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="section-2">
        {otherDetails.map((detail, index) => (
          <button onClick={() => props.addSearchKeywords(detail)} key={index}>
            {detail}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleJob;
