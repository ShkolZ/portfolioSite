import React from "react";

function Projects() {
  return (
    <div className="p-6 background main-border mb-5 rounded-2xl">
      <div>
        <img></img>
        <h2 className="heading">Projects</h2>
        <p>Here are my projects</p>
      </div>
      <div className="overflow-hidden">
        <div id="animation-container">
          <div className="animated-card">
            <img></img>
          </div>
          <div className="animated-card">
            <img></img>
          </div>
          <div className="animated-card">
            <img></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
