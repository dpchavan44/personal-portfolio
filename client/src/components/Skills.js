import React from 'react';
import {  FaJs, FaReact } from 'react-icons/fa';
import { TbBrandCpp } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { PiFileCssFill } from "react-icons/pi";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { DiGithubFull } from "react-icons/di";

const Skills = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full border-y-2 py-4 group">
      <div className="inline-block animate-scroll group-hover:animate-scroll-paused group-hover:cursor-pointer">
          <TbBrandCpp size={60} className="inline-block mx-2 text-black dark:text-white icon-hover" />
          <FaDatabase size={60} className="inline-block mx-2 text-slate-500 dark:text-slate-300 icon-hover"/>
          <FaAws size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          <FaJs size={60} className="inline-block mx-2 text-yellow-500 dark:text-yellow-200 icon-hover" />
          <FaReact size={60} className="inline-block mx-2 text-blue-400 icon-hover" />
          <DiNodejs size={60} className="inline-block mx-2 text-green-500 icon-hover"/>
          <FaLinux size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          <BsFiletypeHtml size={60} className="inline-block mx-2 text-orange-400 icon-hover"/>
          <PiFileCssFill size={60} className="inline-block mx-2 text-blue-500 icon-hover"/>
          <DiGithubFull size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          {/* Duplicate icons for continuous scrolling */}
          <TbBrandCpp size={60} className="inline-block mx-2 text-black dark:text-white icon-hover" />
          <FaDatabase size={60} className="inline-block mx-2 text-slate-500 dark:text-slate-300 icon-hover"/>
          <FaAws size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          <FaJs size={60} className="inline-block mx-2 text-yellow-500 dark:text-yellow-200 icon-hover" />
          <FaReact size={60} className="inline-block mx-2 text-blue-400 icon-hover" />
          <DiNodejs size={60} className="inline-block mx-2 text-green-500 icon-hover"/>
          <FaLinux size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          <BsFiletypeHtml size={60} className="inline-block mx-2 text-orange-400 icon-hover"/>
          <PiFileCssFill size={60} className="inline-block mx-2 text-blue-500 icon-hover"/>
          <DiGithubFull size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          {/* Duplicate icons for continuous scrolling */}
          <TbBrandCpp size={60} className="inline-block mx-2 text-black dark:text-white icon-hover" />
          <FaDatabase size={60} className="inline-block mx-2 text-slate-500 dark:text-slate-300 icon-hover"/>
          <FaAws size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          <FaJs size={60} className="inline-block mx-2 text-yellow-500 dark:text-yellow-200 icon-hover" />
          <FaReact size={60} className="inline-block mx-2 text-blue-400 icon-hover" />
          <DiNodejs size={60} className="inline-block mx-2 text-green-500 icon-hover"/>
          <FaLinux size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
          <BsFiletypeHtml size={60} className="inline-block mx-2 text-orange-400 icon-hover"/>
          <PiFileCssFill size={60} className="inline-block mx-2 text-blue-500 icon-hover"/>
          <DiGithubFull size={60} className="inline-block mx-2 text-black dark:text-white icon-hover"/>
      </div>
    </div>
  );
};

export default Skills;