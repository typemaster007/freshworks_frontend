import React from "react";



function LandingPage(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      
      <div className="scrollToTop">
        
      </div>
    </>
  );
}

export default LandingPage;
