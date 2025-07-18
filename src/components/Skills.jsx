import React from "react";
import ProjectListItem from "./ProjectListItem";
import ReactLogo from "../assets/skills/react.svg";
import HTMLLogo from "../assets/skills/html.svg";
import CssLogo from "../assets/skills/css.svg";
import JsLogo from "../assets/skills/javascript.svg";
import GitLogo from "../assets/skills/git.svg";
import NextLogo from "../assets/skills/next.svg";

function Skills() {
  return (
    <div className="card">
      <h2 className="heading">Skills</h2>
      <div className="mt-3">
        <ul className="flex justify-between ">
          <ProjectListItem image={HTMLLogo} title="HTML" />
          <ProjectListItem image={CssLogo} title="CSS" />
          <ProjectListItem image={JsLogo} title="JS" />
          <ProjectListItem image={GitLogo} title="Git" />
          <ProjectListItem image={ReactLogo} title="React" />
          <ProjectListItem image={NextLogo} title="Next.js" />
        </ul>
      </div>
    </div>
  );
}

export default Skills;
