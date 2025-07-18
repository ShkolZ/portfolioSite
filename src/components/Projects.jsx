import React from "react";

function Projects() {
  return (
    <div className="card">
      <div>
        <img></img>
        <h2 className="heading">Projects</h2>
        <p>Here are my projects</p>
      </div>
      <div className="overflow-hidden">
        <div id="animation-container">
          <div className="animated-card">
            <a href="https://pitch-up-delta.vercel.app/">
              <img src="pitch-up.png" className="rounded-lg"></img>
            </a>
          </div>

          <div className="animated-card">
            <img src="portfolio.png" className="rounded-lg"></img>
          </div>

          <div className="animated-card">
            <img src="pitch-up.png" className="rounded-lg"></img>
          </div>

          <div className="animated-card">
            <a href="https://pitch-up-delta.vercel.app/">
              <img src="pitch-up.png" className="rounded-lg"></img>
            </a>
          </div>

          <div className="animated-card">
            <img src="portfolio.png" className="rounded-lg"></img>
          </div>

          <div className="animated-card">
            <img src="pitch-up.png" className="rounded-lg"></img>
          </div>
          <div className="animated-card">
            <a href="https://pitch-up-delta.vercel.app/">
              <img src="pitch-up.png" className="rounded-lg"></img>
            </a>
          </div>

          <div className="animated-card">
            <img src="portfolio.png" className="rounded-lg"></img>
          </div>

          <div className="animated-card">
            <img src="pitch-up.png" className="rounded-lg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
