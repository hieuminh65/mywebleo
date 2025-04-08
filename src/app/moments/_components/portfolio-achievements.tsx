"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the Achievement type
type Achievement = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Apple Software Engineer Intern 2025 Offer",
    date: "April 2025",
    description:
      "I received an offer to join Apple as a Software Engineer Intern for the 2025 program in the Apple Services team in Cupertino, CA.",
    image: "/moments/1.png",
  },
  {
    id: "2",
    title: "Genio Project was sponsored by Anthropic",
    date: "April 2025",
    description:
      "One of my projects, the Genio Project, was sponsored by Anthropic to use their specialized version of Claude tailored for higher education institutions. I received this through their Student Builder program.",
    image: "/moments/2.png",
  },
  {
    id: "3",
    title: "Amazon Software Development Engineer Intern Offer",
    date: "February 2025",
    description:
      "I received an offer to join Amazon as a Software Development Engineer Intern in Seattle, WA.",
    image: "/moments/3.png",
  },
  {
    id: "4",
    title:
      "Continued receiving sponsorship from Microsoft for Startups Founders Hub",
    date: "February 2025",
    description:
      "Microsoft for Startups Founders Hub continue to sponsor $5000 for my projects to use their services and OpenAI technology.",
    image: "/moments/4.png",
  },
  {
    id: "5",
    title: "Published at EMNLP (Top 20%)",
    date: "December 2024",
    description:
      "Research paper 'Global is Good, Local is Bad? Understanding Brand Bias in LLMs' was accepted to EMNLP 2025.",
    image: "/moments/5.png",
  },
  {
    id: "6",
    title: "Received sponsorship from AWS Activate",
    date: "December 2024",
    description:
      "I received a $1000 sponsorship from AWS Activate for my projects to use their services, such as AWS.",
    image: "/moments/6.png",
  },
  {
    id: "7",
    title: "Jobsdreamer",
    date: "August 2024",
    description:
      "Launched Jobsdreamer, a platform that helps students find internships by automating job searches and notifications using AI tools after 2 months of development.",
    image: "/moments/7.png",
  },
  {
    id: "14",
    title: "Association for Computing Machinery (ACM)",
    date: "November 2023",
    description:
      "I joined ACM (Association for Computing Machinery (ACM) as a Software Lead Shadow and worked with other students to build a project.",
    image: "/moments/14.png",
  },
  {
    id: "10",
    title: "Talk to Listen reached 500 users",
    date: "July 2023",
    description:
      "One of my projects, Talk to Listen, reached 500 users after 3 months of launch.",
    image: "/moments/10.png",
  },
  {
    id: "13",
    title: "Joined Resilience, Inc",
    date: "July 2023",
    description:
      "I joined Resilience, Inc. as an AI/ML Developer Intern — my first role that introduced me to working in a team, building real products, and getting a taste of AI and software development.",
    image: "/moments/13.png",
  },
  {
    id: "11",
    title: "Talk to Listen",
    date: "April 2023",
    description:
      "One of my first major projects, Talk to Listen, was officially launched on both App Store and Google Play Store.",
    image: "/moments/11.png",
  },
  {
    id: "12",
    title: "Student at University of South Florida",
    date: "August 2021",
    description: "My journey started at University of South Florida.",
    image: "/moments/12.png",
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth entrance
    },
  },
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Alternate layout direction for even/odd items
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`mb-32 first:mt-16 last:mb-16 scroll-mt-16`}
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center`}
      >
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200">
            <Image
              src={achievement.image || "/placeholder.svg"}
              alt={achievement.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
              {achievement.date}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold">
              {achievement.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioAchievements() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
