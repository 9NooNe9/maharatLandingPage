"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
	return (
		<div
			className="min-h-screen relative flex flex-col text-center md:text-right xl:flex-row max-w-[2000px] 
		xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-16 md:top-24 uppercase tracking-[5px] text-gray-500 text-sm">
				گواهی نامه ها
			</h3>
		</div>
	);
};

export default Skills;
