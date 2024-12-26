import  { useState, useEffect } from "react";

const getContainerStyles = width => {
  if (width <= 639) {
    // Styles for mobile devices
    return {
      maxWidth: "2520px",
      margin: "25px auto",
      paddingLeft: "0px",
      paddingRight: "0px",
      // backgroundColor: "#000",
    };
  } else if (width >= 640 && width < 768) {
    // Styles for tablets
    return {
      maxWidth: "2520px",
      margin: "25px auto",
      paddingLeft: "10px",
      paddingRight: "10px",
    };
  } else if (width >= 768 && width < 1280) {
    // Styles for small laptops
    return {
      maxWidth: "2520px",
      margin: "25px auto",
      paddingLeft: "10px",
      paddingRight: "10px",
    };
  } else {
    // Styles for desktops
    return {
      maxWidth: "2520px",
      margin: "25px auto",
      paddingLeft: "100px",
      paddingRight: "100px",
    };
  }
};

const Container = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = getContainerStyles(windowWidth);

  return <div style={styles}>{children}</div>;
};

export default Container;
