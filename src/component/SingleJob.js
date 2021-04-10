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
    // eslint-disable-next-line
    const svgLogo = import(`${logo}`).then((data) => {
      setIcon(data.default);
    });
  };

  useEffect(() => {
    svgImport();
    // eslint-disable-next-line
  }, [logo]);
  return (
    <div
      className={featured ? "singleJob singleJob--borderLeft" : "singleJob"}
      key={props.index}
    >
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="section-1">
        <div className="company">
          <span className="company-name">{company}</span>
          {props.job.new && <span className="new">new!</span>}
          {featured && <span className="feature">featured!</span>}
        </div>
        <div className="position">{position}</div>
        <div className="job-details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="section-2">
        {otherDetails.map((detail, index) => (
          <span onClick={() => props.addSearchKeywords(detail)} key={index}>
            {detail}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleJob;
