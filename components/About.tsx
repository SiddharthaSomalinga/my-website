"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I am currently a college freshman at the {" "}
          <span className="text-white">
            University of Texas at Dallas.
          </span>{" "}
          I am focusing on Artificial Intelligence and Machine Learning and have experience with developing and integrating
          software in a variety of fields.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Currently, I'm a software engineer intern at{" "} 
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://www.petrasecurity.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            Petra Security
          </a>
          , programming several vital components of their cybersecurity product. As a research member, 
          designer, and developer at{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://www.aiaautd.org/"
            target="blank"
            rel="noopener noreferrer"
          >
            AIAA UTD
          </a>
          , part of the drone swarm project, I have developed algorithms using ROS and Python to coordinate a swarm of drones.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
        I enjoy working in collaborative environments 
        which help with producing quality solutions. My experience working closely with 
        project managers has also enabled me to set attainable goals and achieve them in software development. 
        Let's connect and explore how we can drive technological innovation together!
        </p>
      </div>
    </section>
  );
}
