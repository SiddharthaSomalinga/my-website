"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "May 2025 — Aug 2025",
    currentPosition: "Software Engineer Intern",
    place: "Petra Security",
    previousPositions: [""],
    description:
      "I used Python and custom scraping tools to build an automated cybersecurity monitoring system that tracked online forums for threats like token theft and business email compromise (BEC), leading to a 60% reduction in analyst workload. I applied trend analysis and AI-based threat detection algorithms to optimize the relevance of alerts, improving real-time responsiveness to cybersecurity threats by 40%, helping clients act more quickly and accurately on potential attacks.",
    skills: [
      "Python",
      "Automation",
      "Cybersecurity",
      "APIs",
      "Version Control",
      "Databases",
    ],
  },
  {
    timeline: "Feb 2025 — Apr 2025",
    currentPosition: "Full Stack Developer – CoDriver",
    place: "Association of Computing Machinery UTD",
    previousPositions: [""],
    description:
      "I used React Native to design and implement real-time voice assistant features for CoDriver, a safety-critical mobile application, to enhance driver focus and reduce distractions, resulting in a 35% decrease in manual user input during test scenarios. I contributed to the development of a hands-free, conversational AI system that delivers personalized travel information and contextual updates by integrating third-party navigation systems, improving overall app usability by 25%.",
    skills: [
      "React Native",
      "JavaScript / TypeScript",
      "Mobile App Development",
      "APIs",
      "Voice Interface Development",
      "Expo",
    ],
  },
  {
    timeline: "Sep 2024 — Apr 2025",
    currentPosition: "Aerospace Research Corps Research Member - Drone Swarm Project",
    place: "AIAA UTD",
    previousPositions: [""],
    description:
      "I used C++ and Python scripts with ROS to develop flight algorithms for a swarm of autonomous drones capable of forming complex aerial patterns, achieving 75% precision in synchronized movements. I contributed to drone swarm simulation and performance testing through over 500 trials, reducing positional error rate by 20% in real-world test environments and currently preparing findings for publication under Dr. Tyler Summers's Robotics Lab.",
    skills: [
      "C++",
      "Python",
      "ROS",
      "Drone Technologies",
      "Mathematical Modeling",
    ],
  },
  {
    timeline: "Mar 2022 — Aug 2022",
    currentPosition: "Lead Software Engineer",
    place: "Cafe Mocha",
    previousPositions: [""],
    description:
      "I used front-end development tools to completely redesign and launch Cafe Mocha’s website, increasing web traffic by 54% and significantly improving accessibility and mobile responsiveness for users seeking mental health resources. I managed web performance using engagement data via Google Analytics and improved navigation structure, resulting in a 40% increase in interaction with support content and stronger community participation.",
    skills: [
      "HTML",
      "CSS",
      "UI/UX Design",
      "SEO Optimization",
      "Back-End Development",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="https://docs.google.com/document/d/1F6jC0ty1CqFDMGVm_AgXl-7UCoC897XoFoeEqe4SozI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
