"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
	return (
		<motion.div
			className="min-h-screen relative flex flex-col text-center md:text-right xl:flex-row max-w-[2000px] 
		xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-16 md:top-24 uppercase tracking-[5px] text-gray-500 text-sm">
				گواهی نامه ها
			</h3>

			<div className="grid grid-cols-4 gap-5">
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</motion.div>
	);
};

export default Skills;
