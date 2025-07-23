"use client";
import React, { useRef } from "react";
import projectsData from "@/utils/projects";
import { useInView, motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "./ui/badge";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects" className="py-15 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        <motion.div
          className="w-full h-auto w-full lg:grid lg:grid-cols-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData?.map((item, index) => (
            <CardContainer className="inter-var my-[-3rem]" key={index}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item?.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem className="mt-5" translateZ="50">
                  Features
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="w-full mt-4 text-white"
                >
                  {item.features}
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="w-full flex gap-2 my-3 flex-wrap"
                >
                  {item?.techStack.map((tech, i) => (
                    <Badge key={i} className=" bg-gray-700 text-white">
                      {tech.icon &&
                        React.createElement(tech.icon, {
                          className: `mr-1 inline-block`,
                        })}
                      {tech.name}
                    </Badge>
                  ))}
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  {item?.liveURL ? (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={item.liveURL}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Visit now →
                    </CardItem>
                  ) : (
                    <CardItem
                      translateZ={20}
                      className="text-xs font-normal text-white opacity-40 cursor-not-allowed"
                    >
                      Visit now →
                    </CardItem>
                  )}

                  <div className="flex ">
                    <button
                      onClick={() => console.log("hello world")}
                      disabled={!item.demo}
                      className={`px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold truncate ${
                        item.demo
                          ? "opacity-100 cursor-pointer"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Video demo
                    </button>

                    <button
                      onClick={() => console.log("hello world")}
                      disabled={!item.githubLink}
                      className={` ml-1 sm:ml-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold truncate ${
                        item.githubLink
                          ? "opacity-100 cursor-pointer"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <FaGithub className="size-5" />
                    </button>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/CodeWithAbhay777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black cursor-pointer hover:scale-103 hover:bg-gray-200">
              View More on Github <FaGithub className="size-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
