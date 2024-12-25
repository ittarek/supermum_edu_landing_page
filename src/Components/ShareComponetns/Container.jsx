import React from "react";

const styles = {
  container: {
    maxWidth: "2520px",
    margin: "50px auto",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  "@media (min-width: 640px)": {
    container: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  "@media (min-width: 768px)": {
    container: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  "@media (min-width: 1280px)": {
    container: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
};

const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default Container;
