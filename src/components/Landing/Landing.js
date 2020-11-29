import React from "react";



function LandingPage(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return(
    <div id='body'>
        <div class="card" style={{backgroundColor:"#f6f6f6"}}>
          <div class="card-header">
            <h2 style={{textAlign:"center"}}>Duck Feeding habits research</h2>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Scientists are trying to understand how ducks are being fed in parks around the world. We need
                to collect the following information for our research:</p>
                
            </blockquote>
          </div>
        </div>

        <div class="card text-center" style={{backgroundColor:"#f6f6f6"}}>
          <div class="card-header">
            <h3>Are you a User here to submit Duck Feed data from around the world?</h3>
          </div>
          <div class="card-body">
            <h5 class="card-title">Duck feeding habits research</h5>
            <p class="card-text">Your data on how you have fed the ducks allows scientists to obtain valuable research data.</p>
            <a href="/users" class="btn btn-primary">Submit your data</a>
          </div>
        </div>

        <div class="card text-center" style={{backgroundColor:"#f6f6f6"}}>
          <div class="card-header">
            <h3>Are you a Scientist here to view submitted duck data?</h3>
          </div>
          <div class="card-body">
            <h5 class="card-title">Crowdfunded Duck data from around the world</h5>
            <p class="card-text">Data from multiple sources and locations allows for a dynamice visualization for your research.</p>
            <a href="/scientists" class="btn btn-primary">View Duck data</a>
          </div>
        </div>

        
        
    </div>
);
}



export default LandingPage;
