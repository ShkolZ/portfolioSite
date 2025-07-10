import React from "react";
import ProjectListItem from "./ProjectListItem";
import ReactLogo from "../assets/react.svg";
import HTMLLogo from "../assets/html.svg";
import CssLogo from "../assets/css.svg";
import JsLogo from "../assets/javascript.svg";
import GitLogo from "../assets/git.svg";
import NextLogo from "../assets/next.svg";

function Skills() {
  return (
    <div className="p-6 background main-border mb-5 rounded-2xl">
      <h2 className="heading">Skills</h2>
      <div className="mt-3">
        <ul className="flex justify-between">
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
