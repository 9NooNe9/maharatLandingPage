"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="h-screen flex relative overflow-hidden flex-col text-left 
		md:flex-row max-w-full px-4 md:px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-16 md:top-24 uppercase tracking-[8px] text-gray-500 text-sm">
				محصولات
			</h3>

			<div className="w-full mt-10 md:mt-28 flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scroll-smooth">
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
};

export default Experience;
