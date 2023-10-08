import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (props) => {
  return (
    <div className={styles.BusinessList}>
        {
            props.businesses.map(business => {
                return <Business business={business} key={business.name}/>
            })
        }
    </div>
  );
};

export default BusinessList;
