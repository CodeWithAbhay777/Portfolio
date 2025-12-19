import React from "react";
import { cn } from "@/lib/utils.js";
import { Spotlight } from "@/components/ui/Spotlight";
import { PointerHighlight } from "./ui/pointer-highlight";
import { FlipWords } from "./ui/flip-words";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowDownToLine, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_px,transparent_px),linear-gradient(to_bottom,#171717_px,transparent_px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="h-full w-full md:w-[80%] mx-auto flex flex-col items-center justify-center p-4">
        <div className="z-5">
          <h1>Hello I'm</h1>
        </div>
        <div className="text-5xl sm:text-6xl font-bold my-2 w-full flex items-center justify-center text-center z-5">
          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Abhay Awasthi.
          </span>
        </div>
        <div className=" my-1 flex items-center justify-center gap-4 flex-wrap">
          <span>
            <ContainerTextFlip words={["Fullstack", "Frontend", "Backend"]} />
          </span>
          <span className="text-2xl sm:text-6xl md:text-8xl">
            <PointerHighlight>Developer</PointerHighlight>
          </span>
        </div>
        <div className="w-[70%] text-center">
          <TextGenerateEffect
            words={
              "Passionate developer who builds scalable full-stack web applications using modern technologies."
            }
            textClassName={"text-gray-600 font-light text-[1.2rem]"}
          />
        </div>
        <div className="mt-8 w-full flex items-center justify-center">
          <div className="flex text-center w-full sm:w-[80%] md:w-[40%] items-center justify-center gap-4">
            <a href="/Resume_V8.pdf" download>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="div"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer px-4 py-2"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Resume</span>
              </HoverBorderGradient>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=codewithabhay11@gmail.com&su=Let's%20Connect&body=Hi%20Abhay%2C%20I%20checked%20out%20your%20portfolio..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="div"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer px-4 py-2"
              >
                <Mail className="w-4 h-4" />
                <span>Message</span>
              </HoverBorderGradient>
            </a>
          </div>
        </div>
        <div className="mt-8 w-full flex items-center justify-center gap-6">
          <a
            href="https://github.com/CodeWithAbhay777" // ← your actual GitHub username here
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 cursor-pointer text-white hover:text-gray-400 hover:scale-110 transition-all duration-150" />
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-awasthi-83326b281/" // ← your actual LinkedIn username here
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 cursor-pointer text-white hover:text-gray-400 hover:scale-110 transition-all duration-150" />
          </a>
        </div>
      </div>
    </div>
  );
}
