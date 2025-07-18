import React from "react";

function Overview() {
  return (
    <div className="p-6 background main-border mb-5 rounded-2xl lg:min-h-[550px]">
      <h2 className="heading mb-3">Summary</h2>
      <div className="bg-[#0D0C0D] w-full rounded-2xl py-2 px-3 text-lg">
        <p>
          I am a university <span className="font-semibold">student</span>{" "}
          specializing in front-end development with some amount of experience
          in building web interfaces. I have solid understanding of{" "}
          <span className="font-semibold">HTML, CSS, JavaScript,</span> and
          modern frameworks such as <span className="font-semibold">React</span>{" "}
          and <span className="font-semibold">Next.js</span>. I'm eager to
          contribute to real-world projects and grow as a developer in a
          collaborative team environment.
        </p>
        <br />
        <p>
          I’m currently open to job or internship opportunities—if you have an
          offer or would like to connect, feel free to reach out via LinkedIn,
          Telegram, or email.
        </p>
      </div>
    </div>
  );
}

export default Overview;
