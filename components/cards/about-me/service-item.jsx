import React from "react";

const ServiceItem = ({ name, description, icon }) => (
  <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
    <div className="service-item">
      <div className="icon">
        <span className={`fa fa-${icon}`}></span>
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="desc">
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceItem;
