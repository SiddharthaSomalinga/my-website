"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/fire.png",
    title: "FireGuard",
    description:
      "I used Random Forest algorithm and wildfire datasets in Python to train a predictive model capable of identifying potential wildfire risks with 95% accuracy, supporting emergency response teams in identifying high-risk zones. I built and integrated a chatbot system using s(CASP) and a live embedded fire map to provide real-time updates, which enabled first responders to take immediate action during simulated wildfire drills, reducing average decision time by 30%. I am currently integrating the ML model into Retenica’s Wildfire Tracker app, and this project earned Top 8 placement and Best Presentation Award at HackSkye 2025 out of 100+ submissions.",
    skills: [
      "Machine Learning",
      "Data Analysis and Preprocessing",
      "Software Development (Python & Google Colab)",
      "Geospatial Mapping & Embedded Systems",
      "Answer-Set Programming (Prolog and s(CASP))",
    ],
    link: "https://fireshield.streamlit.app",
  },
  {
    imagePath: "/hab-drone.png",
    title: "Harmful Algal Bloom Drone Detection",
    description:
      "I used OpenCV and AI-based image recognition to program a drone system for detecting harmful algal blooms (HABs), achieving 87% classification accuracy on diverse water samples collected across multiple test environments. I presented the project to a panel of Garver Engineering professionals and academic mentors, securing 3rd place at the district competition and earning an $800 scholarship through partnerships with MIT and public safety experts.",
    skills: [
      "Drone Technology",
      "Sensor Integration",
      "Data Analysis",
      "Environmental Science",
      "Project Management",
    ],
    link: "https://drive.google.com/file/d/1f4KQWQAt81UBBJKj_0FiXonB-uD4zcNU/view?usp=sharing",
  },
  {
    imagePath: "/rainfall-ml-model.jpg",
    title: "Rainfall Prediction Machine Learning Model",
    description:
      "I used historical weather datasets to develop a machine learning model with PyTorch and TensorFlow for rainfall prediction, achieving 74% accuracy in regional forecasts through regression analysis. I applied data preprocessing techniques and feature engineering, including normalization and correlation-based filtering, to increase model performance by 30% over the initial baseline.",
    skills: [
      "Python",
      "Linear Regression",
      "Google Colab",
      "Pandas",
      "Data Analysis",
    ],
    link: "https://drive.google.com/drive/folders/11yTmeEQSD2DwtckHsc6992UN6dh770Qa?usp=sharing",
  },
  /*{
    imagePath: "/swoop-og-banner.webp",
    title: "Swoop Exchange - Landing Page",
    description:
      "Swoop's landing page highlights the platform's use cases and solutions. Swoop Exchange is a Meta-DEX Aggregator that automatically sources, ranks and routes quotes from the best DEX Aggregators and Bridges, ensuring the best prices for on-chain and cross-chain swaps. Swoop Exchange has achieved millions in USD volume and currently has around 4000 monthly users with 0 paid marketing.",
    skills: [
      "Next.js",
      "Framer",
      "Shadcn/ui",
      "Typescript",
      "JavaScript",
      "Vercel",
      "Figma",
    ],
    link: "https://swoop.exchange",
  },
  {
    imagePath: "/app-front-1.png",
    title: "Swoop Exchange - Application Design",
    description:
      "Swoop Exchange is a next generation Meta Decentralized Exchange and Bridge Aggregator. By Aggregating the Aggregators, Bridges, and Liquidity across chains, and off-chain it solves protocol and liquidity fragmentation, significantly improving UX. Provides access to: 450,000+ Tokens, 7+ Aggregators, 13+ Bridges, 50+ DEXs, 280+ Liquidity Sources and 16+ Blockchains.",
    skills: [
      "Next.js",
      "Typescript",
      "JavaScript",
      "MUI",
      "Tailwind CSS",
      "Vercel",
      "Figma",
    ],
    link: "https://app.mtopswap.com",
  },
  {
    imagePath: "/meikopoulos.com_PC.png",
    title: "meikopoulos.com",
    description:
      "The portfolio webpage you are looking at right now. Based on Brittany Chiang's website (they awesome). Coded in Visual Studio Code.",
    skills: ["Typescript", "JavaScript", "Tailwind CSS", "Vercel"],
    link: "https://github.com/0xAlexander/my-website",
  }, */
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
