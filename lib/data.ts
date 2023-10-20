import React from "react";

import hobbesAndSushiDisplay from "@/public/hobbes-and-sushi-gif.gif"
import hobbesAndSushiHover from "@/public/hobbes-and-sushi.png"
import mushroomForest from "@/public/mushroom-forest.jpg"
import council from "@/public/council.png"
import traditional from "@/public/traditional-sized.gif"
import allOfMeAllOfYou from "@/public/all-of-me-all-of-you.gif"
import roboticArm from "@/public/robotic-arm.png"
import stemchests from "@/public/stemchests.png"
import sculptor from "@/public/sculptor.png"

export const links = [
    {
      name: "About",
      href: "/about",
      newTab: false,
    },
    {
      name: "Email",
      href: "mailto:aditya.das@yale.edu",
      newTab: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-das-me/",
      newTab: true,
    }
  ] as const;

  export const filters = ["art", "design", "tech", "learn"] as const;

  export const projectsData = [
    {
      title: "STEMChests",
      displayImage: stemchests,
      hoverImage: stemchests,
      page: "www.stemchests.com",
      type: ["design", "tech", "learn"],
    },
    {
      title: "All Of Me, All Of You",
      displayImage: allOfMeAllOfYou,
      hoverImage: allOfMeAllOfYou,
      page: "https://www.youtube.com/watch?v=7Z2KVbWiKxU",
      type: ["art"],
    },
    {
      title: "Traditional",
      displayImage: traditional,
      hoverImage: council,
      page: "",
      type: ["art"],
    },
    {
      title: "Digital",
      displayImage: mushroomForest,
      hoverImage: sculptor,
      page: "",
      type: ["art"],
    },
    {
      title: "Misc. Posters",
      displayImage: hobbesAndSushiDisplay,
      hoverImage: hobbesAndSushiHover,
      page: "",
      type: ["design"],
    },
    {
      title: "Bluetooth Robotic Arm",
      displayImage: roboticArm,
      hoverImage: roboticArm,
      page: "",
      type: ["design"],
    },
  ] as const;